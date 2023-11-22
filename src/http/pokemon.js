import api from "./../plugins/axios.js";

export default class Pokemon {
  async getPokemons() {
    try {
      const res = await api.get("/pokemon?limit=649&offset=0");
      return res.data.results;
    } catch (err) {
      console.log(err);
    }
  }
}
