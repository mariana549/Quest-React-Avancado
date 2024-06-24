import axios from "axios"

export async function getPokedex(limit, offset) {
   const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
   const response = await axios.get(`${baseUrl}`)
   const results = response.data.results
   return results
}

export async function getPokemon(name){
   const baseUrl = `https://pokeapi.co/api/v2/pokemon/${name}`
   const response = await axios.get(`${baseUrl}`)
   const results = response.data
   return results
}

export async function getAbilty(name){
   const baseUrl = `https://pokeapi.co/api/v2/ability/${name}`
   const response = await axios.get(`${baseUrl}`)
   const data = response.data.effect_entries

   return data
}

export async function pokeSpecies(url) {
   const response = await axios.get(url)
   const data = response.data
   return data
}
