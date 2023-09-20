import renderHtmlListPokemon from './components/renderHtmlListPokemon.js';
import Pokemon from './http/pokemon.js';

const classPokemon = new Pokemon();
const pokemons = await classPokemon.getPokemons();
const search = document.getElementById("input-search");
const listPokemon = document.getElementById("list-pokemon");
const classRenderHtmlListPokemon = new renderHtmlListPokemon(listPokemon);

classRenderHtmlListPokemon.render(pokemons);

search.addEventListener("input", (e) => {
  if (e.target.value.trim()) {
    let filtered = pokemons.filter(pokemon => pokemon.name.toLowerCase().indexOf(e.target.value.trim().toLowerCase()) !== -1);
    classRenderHtmlListPokemon.render(filtered);
  } else {
    classRenderHtmlListPokemon.render(pokemons);
  }
})