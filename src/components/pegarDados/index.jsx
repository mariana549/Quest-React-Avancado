import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../cards";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { NavBar } from "../navBar";
import { Button } from "../Button";

export const GetData = ({ setPokemonData }) => {
   const [pokemons, setPokemon] = useState([])
   const [pokemonsVisiveis, setPokemonVisiveis] = useState(10)

   const axiosData = async () => {
      try {
         const urls = [];
         const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`
         const response = await axios.get(`${baseUrl}`)
         const results = response.data.results

         for (let i = 1; i <= results.length; i++) {
            urls.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
         }

         const responses = await axios.all(urls.map(url => axios.get(url)))
         const data = responses.map((response) => response.data)

         setPokemon(data)
      } catch (error) {
         console.error(`Error fetching Pokemon API: ${error.message}`)
      }
   }

   useEffect(() => {
      axiosData()
   }, [])

   const handlerShowMore = () => {
      setPokemonVisiveis(pokemonsVisiveis => pokemonsVisiveis + 10);
   }

   const getPokemons = (name) => {
      const filteredPokemons = pokemons.filter(pokemon => pokemon.name.includes(name.toLowerCase()));
      name ? setPokemon(filteredPokemons) : setPokemon(pokemons);
   };



   return (
      <>
         <NavBar getPokemons={getPokemons} />

         <main className="container box">
            <Lista>
               {pokemons.slice(0, pokemonsVisiveis).map((pokemon, index) => (
                  <Link to={`/Perfil/${pokemon.name}`} onClick={() => setPokemonData(pokemon)} key={index}>
                     <Card img={pokemon.sprites.front_default} img2={pokemon.sprites.back_default} name={pokemon.name} />
                  </Link>
               ))}
            </Lista>

            {pokemonsVisiveis < 1302 && (
               <Button onClick={handlerShowMore}>Buscar Mais</Button>
            )}
         </main>
      </>
   )
}

const Lista = styled.ul`
   display: flex;
   flex-wrap: wrap;
   width: 100%;
   gap: 15px;
`

GetData.propTypes = {
   setPokemonData: PropTypes.func.isRequired
};

