import api from './../plugins/axios.js';

export async function getPokemons() {
  try {
    const res = await api.get('/pokemon?limit=649&offset=0');
    return res.data.results;
  } catch (err) {
    console.log(err);
  }
}

export function getPokemon() {
  console.log('ok 2');
}