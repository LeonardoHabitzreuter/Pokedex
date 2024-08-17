import Text from '@mui/material/Typography'
import { PokemonsGrid } from './styles'
import { PokemonCard, InfiniteScroll } from '@/components'
import usePokemonsList from './usePokemonsList'

export default function PokemonsList () {
  const { loadMorePokemons, allPokemons, pokemonsURLs } = usePokemonsList()
  
  return (
    <section>
      <Text variant='h2' fontWeight={700}>Pokedex</Text>

      <div style={{ height: '100px' }}></div>

      <InfiniteScroll loadMore={() => loadMorePokemons(allPokemons)}>
        <PokemonsGrid>
          {pokemonsURLs.map(({ url }) => <PokemonCard key={url} url={url}/>)}
        </PokemonsGrid>
      </InfiniteScroll>
    </section>
  )
}
