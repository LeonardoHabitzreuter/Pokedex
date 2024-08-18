import Text from '@mui/material/Typography'
import usePokemonsList from './usePokemonsList'
import { useState } from 'react'
import { PokemonsGrid } from './styles'
import { PokemonProps } from '@/utils/types/Pokemon'
import { PokemonCard, InfiniteScroll, PokemonModal, SearchInput } from '@/components'

export default function PokemonsList () {
  const [pokemonSelected, setPokemonSelected] = useState<PokemonProps | null>(null)
  const {
    searchParam,
    setSearchParam,
    displayMorePokemons,
    pokemonsToDisplay
  } = usePokemonsList()
  
  return (
    <section>
      <PokemonModal pokemon={pokemonSelected} handleClose={() => setPokemonSelected(null)} />
      <Text variant='h2' fontWeight={700}>Pokedex</Text>

      <SearchInput value={searchParam} onChange={setSearchParam} placeholder='Search pokemons by name' />

      <InfiniteScroll loadMore={displayMorePokemons}>
        <PokemonsGrid>
          {pokemonsToDisplay.map(({ url }) => (
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
