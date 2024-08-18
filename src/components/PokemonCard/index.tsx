import { Pokeball } from '@/components'
import usePokemonCard from './usePokemonCard'
import { PokemonProps } from '@/utils/types/Pokemon'
import {
  Container,
  Pokemon,
  PokemonNumber,
  PokemonName,
  PokemonType,
} from './styles'

type Props = {
  url: string
  onClick: (pokemon: PokemonProps) => void
}

export default function CardPokemon ({ url, onClick }: Props) {
  const pokemon = usePokemonCard(url)

  return (
    <Container color={pokemon.backgroundColor} onClick={() => onClick(pokemon)}>
      <Pokemon>
        <PokemonNumber>#{pokemon.id}</PokemonNumber>
        <PokemonName>{pokemon.name}</PokemonName>
        {pokemon.types && (
          <div>
            {pokemon.types.map(pokemonType => (
              <PokemonType color={pokemonType.color} key={pokemonType.name}>
                <img src={`/assets/pokemon-icons/${pokemonType.icon}.svg`} /> <span>{pokemonType.name}</span>
              </PokemonType>
            ))}
          </div>
        )}
        <Pokeball color='#ffffff33' />
      </Pokemon>
      {pokemon.image && (
        <img src={pokemon.image} alt={`${pokemon.name}-image`} />
      )}
    </Container>
  )
}
