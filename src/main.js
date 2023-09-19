import { getPokemons } from './http/pokemon.js';

const pokemons = await getPokemons();
const search = document.getElementById("input-search");
const listPokemon = document.getElementById("list-pokemon")

const renderHtmlListPokemon = async (pokemons) => {
  listPokemon.inner = '';
  let html = '';

  await pokemons.map(pokemon => {
    let url = pokemon.url.split('/');

    html += `<button class="card-pokemon grass js-open-pokemon">
              <div class="image">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${url[6]}.svg">
              </div>
              <div class="info">
                <div>
                  <span>#${url[6]}</span>
                  <strong>${pokemon.name}</strong>
                </div>
              </div>
            </button>`;
  });

  listPokemon.innerHTML = html;
}

search.addEventListener("input", (e) => {
  if (e.target.value.trim()) {
    renderHtmlListPokemon(pokemons.filter(pokemon => pokemon.name.toLowerCase().indexOf(e.target.value.trim().toLowerCase()) !== -1));
  } else {
    renderHtmlListPokemon(pokemons);
  }
})

renderHtmlListPokemon(pokemons);