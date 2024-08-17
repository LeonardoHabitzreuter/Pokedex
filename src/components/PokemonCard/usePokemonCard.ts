import api from '@/utils/api'
import { useEffect } from 'react'
import { useTheme } from 'styled-components'

type PokemonTypesProps = {
  name: string
  color: string
  icon: string
}

export type PokemonProps = {
  id: number
  image: string
  types: PokemonTypesProps[]
  backgroundColor: string
}

type Response = {
  id: number
  types: {
    type: { name: string }
  }[]
  sprites: {
    other: {
      'official-artwork': { front_default: string }
    }
  }
}

export default function usePokemonCard (url: string, setPokemon: (pokemon: PokemonProps) => void) {
  const { colors } = useTheme()
  
  useEffect(() => {
    api.get(url).then(response => {
      const { id, types, sprites } = response.data as Response
      
      const mainType = types.find(x => x.type.name !== 'normal')!.type.name

      setPokemon({
        id,
        backgroundColor: colors.backgroundType[mainType],
        image: sprites.other['official-artwork'].front_default,
        types: types.map(({ type: { name } }) => ({
          name: name,
          icon: name,
          color: colors.type[name],
        }))
      })
    })
  }, [url, colors, setPokemon])
}