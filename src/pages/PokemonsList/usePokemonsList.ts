import { useCallback, useEffect, useMemo, useState } from 'react'
import api from '@/utils/api'
import useStore from '@/utils/store'

type Pokemon = {
  hide: boolean
  url: string
  name: string
}

const ITEMS_PER_SCROLL = 9

export default function usePokemonsList () {
  const [onlyCollection, setOnlyCollection] = useState(false)
  const [searchParam, setSearchParam] = useState('')
  const [pokemonsURLs, setPokemonsURLs] = useState<Pokemon[]>([])
  const [page, setPage] = useState(0)
  
  const { pokemonsCollection } = useStore()

  const displayMorePokemons = useCallback(() => {
    if (onlyCollection || searchParam.length >= 3) return

    setPage(page + 1)
  }, [onlyCollection, searchParam, page, setPage])

  const pokemonsList = useMemo(() => {
    // Using hide prop to avoid re-rendering the same PokemonCard over and over again
    const currentPokemons = pokemonsURLs
      .slice(0, page * ITEMS_PER_SCROLL)
      .map(x => ({
        ...x,
        hide: onlyCollection && !pokemonsCollection.includes(x.name)
      }))
    
    if (searchParam.length < 3) {
      return currentPokemons
    } else {
      return [
        ...currentPokemons.map(x => ({ ...x, hide: x.hide || !x.name.includes(searchParam) })),
        ...pokemonsURLs
          .filter(x => !currentPokemons.some(y => y.name === x.name) && x.name.includes(searchParam))
          .map(x => ({
            ...x,
            hide: onlyCollection && !pokemonsCollection.includes(x.name)
          }))
      ]
    }
  }, [pokemonsURLs, searchParam, page, onlyCollection, pokemonsCollection])

  useEffect(() => {
    api
      .get('/pokemon', { params: { limit: 1300 }})
      .then(({ data }) => {
        const allPokemons = (data.results as Pokemon[]).map(x => ({ ...x, hide: false }))
        setPokemonsURLs(allPokemons)
        displayMorePokemons()
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return {
    displayMorePokemons,
    pokemonsList,
    searchParam,
    setSearchParam,
    onlyCollection,
    setOnlyCollection
  }
}