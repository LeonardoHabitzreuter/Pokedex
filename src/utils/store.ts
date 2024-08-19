import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const POKEDEX_KEY = 'POKEDEX_COLLECTION'

type Store = {
  pokemonsCollection: string[]
  getPokemonCollection: () => string[]
  collectPokemon: (name: string) => void
  dropPokemon: (name: string) => void
}

const useStore = create(
  persist(
    (set, get: () => Store) => ({
      pokemonsCollection: [],
      getPokemonCollection: () => get().pokemonsCollection,
      
      collectPokemon: (name: string) => {
        const currentPokemons = get().pokemonsCollection
        set({ pokemonsCollection: [...currentPokemons, name] })
      },

      dropPokemon: (name: string) => {
        const currentPokemons = get().pokemonsCollection
        set({ pokemonsCollection: currentPokemons.filter(x => x !== name) })
      }
    }),
    {
      name: POKEDEX_KEY
    },
  ),
)

export default useStore as () => Store
