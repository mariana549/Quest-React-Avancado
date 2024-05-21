import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../pokeCards";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { NavBar } from "../../navBar";
import { Button } from "../../pokeButton";
import { Box, Carregando, Lista } from "./styledPokemonList";

export const PokemonList = ({ setPokemonData }) => {
   const [pokemons, setPokemon] = useState([])
   console.log(pokemons, "pokemons")
   const [pokemonsVisiveis, setPokemonVisiveis] = useState(10)
   const [loading, setLoading] = useState(true);

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
         setLoading(false)
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

   const goUpTop = () => {
      window.scrollTo(0, 0);
   }

   const getPokemons = (name) => {
      const filteredPokemons = pokemons.filter(pokemon =>
         pokemon.name.includes(name.toLowerCase()))
      name ? setPokemon(filteredPokemons) : setPokemon(pokemons)
   };

   const getPokemonTypes = (type) => {
      const filteredPokemons = pokemons.filter(pokemon =>
         pokemon.types.map(e => e.type.name).includes(type))
      type ? setPokemon(filteredPokemons) : setPokemon(pokemons)
   }

   return (
      <>
         <NavBar getPokemons={getPokemons} getPokemonsTypes={getPokemonTypes} />

         <main className="container box">
            <Lista>
               {loading ?
                  <Box>
                     <Carregando /> <Carregando /> <Carregando /> <Carregando /> <Carregando /> <Carregando />
                  </Box>

                  : pokemons.slice(0, pokemonsVisiveis).map((pokemon, index) => (
                     <Link to={`/Perfil/${pokemon.name}`} onClick={() => setPokemonData(pokemon)} key={index}>
                        <Card
                           img={pokemon.sprites.front_default}
                           img2={pokemon.sprites.back_default}
                           name={pokemon.name}
                           types={pokemon.types}
                        />
                     </Link>
                  ))}

            </Lista>

            {pokemonsVisiveis < 501 && (
               <Button onClick={handlerShowMore} background="#437bff">Buscar Mais</Button>
            )}

            {pokemonsVisiveis > 499 && (
               <Button onClick={goUpTop}>Subir para Topo</Button>
            )}
         </main>
      </>
   )
}

PokemonList.propTypes = {
   setPokemonData: PropTypes.func.isRequired
};

