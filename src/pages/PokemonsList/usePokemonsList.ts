import { useCallback, useEffect, useState } from 'react'
import api from '@/utils/api'

type Pokemon = {
  url: string
  name: string
}

const ITEMS_PER_SCROLL = 9

export default function usePokemonsList () {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([])
  const [pokemonsURLs, setPokemonsURLs] = useState<Pokemon[]>([])
  const [page, setPage] = useState(0)

  const loadMorePokemons = useCallback((pokemons: Pokemon[]) => {
    setPokemonsURLs(pokemons.slice(0, (page + 1) * ITEMS_PER_SCROLL))
    setPage(page + 1)
  }, [setPokemonsURLs, page, setPage])

  useEffect(() => {
    api
      .get('/pokemon', { params: { limit: 1300 }})
      .then(({ data }) => {
        const allPokemons = (data.results as Pokemon[])
        setAllPokemons(allPokemons)
        loadMorePokemons(allPokemons)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return { loadMorePokemons, allPokemons, pokemonsURLs }
}