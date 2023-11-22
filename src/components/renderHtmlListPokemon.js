export default class renderHtmlListPokemon {
  constructor(element) {
    this.element = element;
  }

  async render(pokemons) {
    this.element.inner = "";
    let html = "";

    await pokemons.map((pokemon) => {
      let url = pokemon.url.split("/");

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

    this.element.innerHTML = html;
  }
}
