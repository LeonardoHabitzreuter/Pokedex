type Statistic = {
  base_stat: number
  stat: { name: string }
}

type Ability = {
  ability: { name: string }
}

export type PokemonResponse = {
  id: number
  name: string
  stats: Statistic[]
  abilities: Ability[]
  types: {
    type: { name: string }
  }[]
  sprites: {
    other: {
      'official-artwork': { front_default: string }
    }
  }
}

type PokemonType = {
  name: string
  color: string
  icon: string
}

export type PokemonProps = Omit<PokemonResponse, 'types'> & {
  image: string
  types: PokemonType[]
  backgroundColor: string
}