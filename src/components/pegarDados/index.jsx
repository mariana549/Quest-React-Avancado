import axios from "axios"
import { useEffect, useState } from "react";

export const GetData = () => {
   const [pokemonData, getPokemonData] = useState([])

   const axiosData = async () => {
      try {
         const urls = [];
         for (let i = 1; i <= 20; i++) urls.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
         const responses = await axios.all(urls.map(url => axios.get(url)))
         const data = responses.map((response) => response.data)
         getPokemonData(data)
      } catch (error) {
         console.error(`Error fetching Pokemon API: ${error.message}`)
      }
   }

   useEffect(() => {
      axiosData()
   }, [])

   return (
      <>
         <h1>pokemons</h1>

         <ul>
            {pokemonData.map((pokemon, index) => (
               <li key={index}>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <h2>{pokemon.name}</h2>
               </li>
            ))}
         </ul>
      </>
   )
}