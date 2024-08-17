import { Pokeball } from '@/components'
import { Main } from './App.styles'
import PokemonsList from '@/pages/PokemonsList'

export default function App () {
  return (
    <Main>
      <Pokeball color='#00000008' />
      <PokemonsList />
    </Main>
  )
}
