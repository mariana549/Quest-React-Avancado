import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../cards";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { NavBar } from "../../navBar";
import { Button } from "../../Button";

export const GetPokedex = ({ setPokemonData }) => {
   const [pokemons, setPokemon] = useState([])
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
         pokemon.types.map(type => type.type.name).includes(type))
      type ? setPokemon(filteredPokemons) : setPokemon(pokemons)
   }
   
   return (
      <>
         <NavBar getPokemons={getPokemons} getPokemonsTypes={getPokemonTypes} />

         <main className="container box">
            <Lista>
               {loading ?
                  <div style={{display: "flex", flexWrap: "wrap"}}>
                     <Carregando /> <Carregando /> <Carregando /> <Carregando /> <Carregando /> <Carregando />
                  </div>

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

            {pokemonsVisiveis < 1303 && (
               <Button onClick={handlerShowMore} style={{ background: "#437bff", padding: "10px", margin: "10px", color: "white", borderRadius: "5px"}}>Buscar Mais</Button>
            )}

            {pokemonsVisiveis > 1301 && (
               <Button onClick={goUpTop} style={{ background: "black", padding: "10px", margin: "10px", color: "white", borderRadius: "5px"}}>Subir para o topo</Button>
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

const Carregando = styled.div`
   width: 300px;
   height: 150px;
   background: #c4c4c420;
   border-radius: 20px;
   margin: 30px;
`

GetPokedex.propTypes = {
   setPokemonData: PropTypes.func.isRequired
};

