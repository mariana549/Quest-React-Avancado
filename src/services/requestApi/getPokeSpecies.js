import axios from "axios";

export async function pokeSpecies(url) {
   const response = await axios.get(url)
   const data = response.data
   return data
}
