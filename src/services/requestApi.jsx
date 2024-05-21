import axios from "axios"

export async function getPokedex (limit, offset) {
      const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      const response = await axios.get(`${baseUrl}`)
      const results = response.data.results
      return results
}

export async function getPokemon (name){
   const baseUrl = `https://pokeapi.co/api/v2/pokemon/${name}/`
   const response = await axios.get(`${baseUrl}`)
   const data = response.data
   return data
}

export async function pokeAbility (url){
   const response = await axios.get(url)
   const data = response.data.effect_entries
   return data
}

// const responses = await axios.all(urls.map(url => axios.get(url)))
// const data = responses.map((response) => response.data)