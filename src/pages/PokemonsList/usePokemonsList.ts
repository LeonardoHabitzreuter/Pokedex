import { useCallback, useEffect, useState } from 'react'
import api from '@/utils/api'

type Pokemon = {
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
    setPokemonsToDisplay(pokemons.slice(0, (page + 1) * ITEMS_PER_SCROLL))
    setPage(page + 1)
  }, [pokemonsURLs, setPokemonsToDisplay, page, setPage])

  useEffect(() => {
    api
      .get('/pokemon', { params: { limit: 1300 }})
      .then(({ data }) => {
        const allPokemons = (data.results as Pokemon[])
        setPokemonsURLs(allPokemons)
        displayMorePokemons(allPokemons)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return { displayMorePokemons, pokemonsToDisplay, searchParam, setSearchParam }
}