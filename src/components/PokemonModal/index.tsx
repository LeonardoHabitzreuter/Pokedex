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
  Relative
} from './styles'

type Props = {
  pokemon: PokemonProps | null
  handleClose: () => void
}

export default function PokemonModal ({ pokemon, handleClose }: Props) {
  return (
    <Modal open={!!pokemon} handleClose={handleClose}>
      {pokemon && (
        <Container container>
          <Left item xs={6} color={pokemon.backgroundColor}>
            <Relative>
              <CustomTitle as="h2">{pokemon.name}</CustomTitle>

              <Img width='96px' height='96px' src={pokemon.image} alt={pokemon.name} />

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