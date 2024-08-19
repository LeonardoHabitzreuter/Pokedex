import { PokemonProps } from '@/utils/types/Pokemon'
import useStore from '@/utils/store'
import { useEffect, useState } from 'react'

export default function usePokemonModal (pokemon: PokemonProps | null) {
  const [isInCollection, setIsInCollection] = useState(false)

  const { pokemonsCollection, dropPokemon, collectPokemon } = useStore()

  useEffect(() => {
    setIsInCollection(pokemonsCollection.includes(pokemon?.name || ''))
  }, [pokemon, pokemonsCollection])

  const changeCollectStatus = () => {
    if (isInCollection) {
      dropPokemon(pokemon!.name)
    } else {
      collectPokemon(pokemon!.name)
    }

    setIsInCollection(!isInCollection)
  }

  return { changeCollectStatus, isInCollection }
}