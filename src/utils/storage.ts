type Storage = {
  pokemonsCollection?: string[]
}

const POKEDEX_KEY = 'POKEDEX_DATA'

const store = async (data: Partial<Storage>) => {
  const currentData = await get()
  localStorage.setItem(
    POKEDEX_KEY,
    JSON.stringify({ ...currentData, ...data })
  )
}

const get = async () => {
  const data = localStorage.getItem(POKEDEX_KEY)
  return data ? (JSON.parse(data) as Storage) : {}
}

export const getPokemonCollection = async () => (await get()).pokemonsCollection || []

export const collectPokemon = async (name: string) => {
  const currentPokemons = await getPokemonCollection()
  store({ pokemonsCollection: [...currentPokemons, name] })
}

export const dropPokemon = async (name: string) => {
  const currentPokemons = await getPokemonCollection()
  store({ pokemonsCollection: currentPokemons.filter(x => x !== name) })
}
