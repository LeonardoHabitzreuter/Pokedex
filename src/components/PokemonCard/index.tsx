import { useState } from 'react'
import Pokeball from '@/components/Pokeball'
import usePokemonCard, { PokemonProps } from './usePokemonCard'
import {
  Container,
  Pokemon,
  PokemonNumber,
  PokemonName,
  PokemonType,
} from './styles'

type Props = { name: string, url: string }

export default function CardPokemon ({ name, url }: Props) {
  const [pokemon, setPokemon] = useState({} as PokemonProps)

  usePokemonCard(url, setPokemon)

  return (
    <Container color={pokemon.backgroundColor}>
      <Pokemon>
        <PokemonNumber>#{pokemon.id}</PokemonNumber>
        <PokemonName>{name}</PokemonName>
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
        <img src={pokemon.image} alt={`${name}-image`} />
      )}
    </Container>
  )
}
