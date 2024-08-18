import api from '@/utils/api'
import { PokemonProps, PokemonResponse } from '@/utils/types/Pokemon'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

export default function usePokemonCard (url: string) {
  const [pokemon, setPokemon] = useState({} as PokemonProps)
  const { colors } = useTheme()
  
  useEffect(() => {
    api.get(url).then(response => {
      const pokemon = response.data as PokemonResponse
      
      const mainType = (
        pokemon.types.find(x => x.type.name !== 'normal')
        || pokemon.types[0]
      ).type.name

      setPokemon({
        ...pokemon,
        backgroundColor: colors.backgroundType[mainType],
        image: pokemon.sprites.other['official-artwork'].front_default,
        types: pokemon.types.map(({ type: { name } }) => ({
          name: name,
          icon: name,
          color: colors.type[name],
        }))
      })
    })
  }, [url, colors, setPokemon])

  return pokemon
}