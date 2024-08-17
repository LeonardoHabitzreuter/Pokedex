import { useEffect, useState } from 'react'
import Text from '@mui/material/Typography'
import api from '@/utils/api'
import { Main, PokemonsList } from './App.styles'
import { Pokeball, PokemonCard } from '@/components'

type Pokemon = {
  url: string
  name: string
}

export default function App () {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    api
      .get('/pokemon', { params: { limit: 6 }})
      .then(({ data }) => setPokemons(data.results))
  }, [])
  
  return (
    <Main>
      <Pokeball color='#00000008' />
      <Text variant='h2' fontWeight={700}>Pokedex</Text>

      <PokemonsList>
        {pokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))}
      </PokemonsList>
    </Main>
  )
}
