const poke_container = document.querySelector('#poke_container')
const pokemons_number = 150
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#F4E7DA',
  rock: '#D5D5D4',
  fairy: '#FCEAFF',
  poison: '#98D7A5',
  bug: '#F8D5A3',
  dragon: '#97B3E6',
  psychic: '#EAEADA1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
}

const main_types = Object.keys(colors)

console.log(main_types)

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

  const Poke_Types = poke.types.map(el => el.type.name)
  const type = main_types.find(type => Poke_Types.indexOf(type) > -1)

  PokeEl.innerHTML = `
  <div class = "img-container">
    <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png"></img>
  </div>
  <div class = "info">
    <span class = "number">${poke.id}</span>
    <h3>${poke.name[0].toUpperCase() + poke.name.slice(1)} </h3>
    <small class = "type">Type: <span> ${type} </span>  </small>
  </div>

  ${poke.name[0].toUpperCase() + poke.name.slice(1)}
  `

  poke_container.appendChild(PokeEl)

}