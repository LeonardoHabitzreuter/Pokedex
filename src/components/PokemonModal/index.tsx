import { PokemonProps } from '@/utils/types/Pokemon'
import { Modal } from '@/components'
import { formatTextToCapitalizeWithTrace, sumBy } from '@/utils/format'
import {
  Container,
  List,
  ListAbilities,
  Bar,
  CustomTitle,
  Left,
  Right,
  CustomSubTitle,
  Img,
  Relative,
  CatchButton
} from './styles'
import { collectPokemon, dropPokemon, getPokemonCollection } from '@/utils/storage'
import { useEffect, useState } from 'react'

type Props = {
  pokemon: PokemonProps | null
  handleClose: () => void
}

export default function PokemonModal ({ pokemon, handleClose }: Props) {
  const [isInCollection, setIsInCollection] = useState(false)

  useEffect(() => {
    getPokemonCollection().then(collection => {
      setIsInCollection(collection.includes(pokemon?.name || ''))
    })
  }, [pokemon])

  const changeCollectStatus = () => {
    if (isInCollection) {
      dropPokemon(pokemon!.name)
    } else {
      collectPokemon(pokemon!.name)
    }

    setIsInCollection(!isInCollection)
  }

  return (
    <Modal open={!!pokemon} handleClose={handleClose}>
      {pokemon && (
        <Container container>
          <Left item xs={6} color={pokemon.backgroundColor}>
            <Relative>
              <CustomTitle as="h2">{pokemon.name}</CustomTitle>

              {pokemon.image && (
                <Img width='96px' height='96px' src={pokemon.image} alt={pokemon.name} />
              )}

              <CustomSubTitle $white as="h3">
                Abilities
              </CustomSubTitle>
              <ListAbilities color={pokemon.types[0].color}>
                {pokemon.abilities.map(item => (
                  <li key={item.ability.name}>
                    {formatTextToCapitalizeWithTrace(item.ability.name)}
                  </li>
                ))}
              </ListAbilities>
              <CatchButton
                onClick={changeCollectStatus}
                fullWidth
                size='large'
                variant='contained'
                bgColor={pokemon.types[0].color}
              >
                {isInCollection ? 'Drop' : 'Catch'} {pokemon.name}
              </CatchButton>
            </Relative>
          </Left>

          <Right item xs={6}>
            <CustomSubTitle as="h3">Base Stats</CustomSubTitle>
            <List>
              {pokemon.stats.map(item => (
                <li key={item.stat.name}>
                  {formatTextToCapitalizeWithTrace(item.stat.name)}{' '}
                  {item.base_stat}
                  <Bar size={item.base_stat} />
                </li>
              ))}
            </List>
            <strong>Total: </strong>
            {sumBy(item => item.base_stat, pokemon.stats)}
          </Right>
        </Container>
      )}
    </Modal>
  )
}