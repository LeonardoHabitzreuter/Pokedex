import { useCallback, useEffect, useState } from 'react'
import api from '@/utils/api'

type Pokemon = {
  hide: boolean
  url: string
  name: string
}

const ITEMS_PER_SCROLL = 9

export default function usePokemonsList () {
  const [searchParam, setSearchParam] = useState('')
  const [pokemonsURLs, setPokemonsURLs] = useState<Pokemon[]>([])
  const [pokemonsToDisplay, setPokemonsToDisplay] = useState<Pokemon[]>([])
  const [page, setPage] = useState(0)

  const displayMorePokemons = useCallback((pokemons: Pokemon[] = pokemonsURLs) => {
    if (searchParam.length >= 3) return

    setPokemonsToDisplay(pokemons.slice(0, (page + 1) * ITEMS_PER_SCROLL))
    setPage(page + 1)
  }, [searchParam, pokemonsURLs, setPokemonsToDisplay, page, setPage])

  useEffect(() => {
    const currentPokemons = pokemonsURLs.slice(0, page * ITEMS_PER_SCROLL)
    
    if (searchParam.length < 3) {
      setPokemonsToDisplay(currentPokemons.map(x => ({ ...x, hide: false })))
    } else {
      setPokemonsToDisplay([
        ...currentPokemons.map(x => ({ ...x, hide: !x.name.includes(searchParam) })),
        ...pokemonsURLs.filter(x => !currentPokemons.some(y => y.name === x.name) && x.name.includes(searchParam))
      ])
    }
  }, [setPokemonsToDisplay, pokemonsURLs, searchParam, page])

  useEffect(() => {
    api
      .get('/pokemon', { params: { limit: 1300 }})
      .then(({ data }) => {
        const allPokemons = (data.results as Pokemon[]).map(x => ({ ...x, hide: false }))
        setPokemonsURLs(allPokemons)
        displayMorePokemons(allPokemons)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return { displayMorePokemons, pokemonsToDisplay, searchParam, setSearchParam }
}