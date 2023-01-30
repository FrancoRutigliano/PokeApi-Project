const poke_container = document.querySelector('#poke_container')
const pokemons_number = 150



const ShowPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++){
    await getPokemon(i)
  }
}

const getPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const res = await fetch(url)

  const pokemon = await res.json()

  createPokemonCard(pokemon)

}

ShowPokemons()

function createPokemonCard(poke) {
  const PokeEl = document.createElement('div')

  PokeEl.classList.add('pokemon-card')

  

  PokeEl.innerHTML = `${poke.id}`

  poke_container.appendChild(PokeEl)

}