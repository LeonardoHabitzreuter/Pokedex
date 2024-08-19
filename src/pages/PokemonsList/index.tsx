import Text from '@mui/material/Typography'
import usePokemonsList from './usePokemonsList'
import { useState } from 'react'
import { Header, PokemonsGrid } from './styles'
import { PokemonProps } from '@/utils/types/Pokemon'
import { PokemonCard, InfiniteScroll, PokemonModal, SearchInput } from '@/components'
import { FormControlLabel, Switch } from '@mui/material'

export default function PokemonsList () {
  const [pokemonSelected, setPokemonSelected] = useState<PokemonProps | null>(null)
  const {
    searchParam,
    setSearchParam,
    displayMorePokemons,
    pokemonsList,
    onlyCollection,
    setOnlyCollection
  } = usePokemonsList()
  
  return (
    <section>
      <PokemonModal pokemon={pokemonSelected} handleClose={() => setPokemonSelected(null)} />
      <Header>
        <Text variant='h2' fontWeight={700}>Pokedex</Text>
        <FormControlLabel
          value='start'
          control={
            <Switch
              color='primary'
              checked={onlyCollection}
              onChange={() => setOnlyCollection(!onlyCollection)}
            />
          }
          label='Filter from collection'
          labelPlacement='start'
        />
      </Header>

      <SearchInput value={searchParam} onChange={setSearchParam} placeholder='Search pokemons by name' />

      <InfiniteScroll loadMore={displayMorePokemons}>
        <PokemonsGrid>
          {pokemonsList.map(({ hide, name, url }) => (
            <PokemonCard
              hide={hide}
              key={name}
              url={url}
              onClick={setPokemonSelected}
            />
          ))}
        </PokemonsGrid>
      </InfiniteScroll>
    </section>
  )
}
