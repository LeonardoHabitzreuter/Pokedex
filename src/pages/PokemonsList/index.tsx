import Text from '@mui/material/Typography'
import usePokemonsList from './usePokemonsList'
import { PokemonsGrid } from './styles'
import { PokemonCard, InfiniteScroll, PokemonModal } from '@/components'
import { PokemonProps } from '@/utils/types/Pokemon'
import { useState } from 'react'

export default function PokemonsList () {
  const [pokemonSelected, setPokemonSelected] = useState<PokemonProps | null>(null)
  const { loadMorePokemons, allPokemons, pokemonsURLs } = usePokemonsList()
  
  return (
    <section>
      <PokemonModal pokemon={pokemonSelected} handleClose={() => setPokemonSelected(null)} />
      <Text variant='h2' fontWeight={700}>Pokedex</Text>

      <div style={{ height: '100px' }}></div>

      <InfiniteScroll loadMore={() => loadMorePokemons(allPokemons)}>
        <PokemonsGrid>
          {pokemonsURLs.map(({ url }) => (
            <PokemonCard
              key={url}
              url={url}
              onClick={setPokemonSelected}
            />
          ))}
        </PokemonsGrid>
      </InfiniteScroll>
    </section>
  )
}
