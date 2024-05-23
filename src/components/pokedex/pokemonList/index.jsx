import { useEffect, useState } from "react";
import Card from "../pokeCards";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { NavBar } from "../../navBar";
import { Button } from "../../pokeButton";
import { Box, Carregando, Lista } from "./styledPokemonList";
import Provider from "../../../contexts/pokeDados/Provider";
import { goUpTop } from "../../scrollToButton";
import { getPokedex } from "../../../services/requestApi";

export const PokemonList = ({ setPokemonData }) => {
   const [pokemons, setPokemon] = useState([])
   const [pokemonsVisiveis, setPokemonVisiveis] = useState(10)
   const [loading, setLoading] = useState(true);

   const limitPokemons = 1000;

   useEffect(() => {
      const fechPokemon = async () => {
         try { 
            const data = await getPokedex(limitPokemons, 0);
            setPokemon([...data])
            setLoading(false)
         } catch (error) {
            console.error(`Error fetching Pokemon API: ${error.message}`)
         }
      }
      fechPokemon()
   }, [])

   const handlerShowMore = () => {
      setPokemonVisiveis(pokemonsVisiveis => pokemonsVisiveis + 10);
   }

   return (
      <Provider value={{pokemons: pokemons, setPokemon: setPokemon}}>
         <NavBar />
         <main className="container box">
            <Lista>
               {loading ?
                  <Box>
                     <Carregando /> <Carregando /> <Carregando /> <Carregando /> <Carregando /> <Carregando />
                  </Box>

                  : pokemons.slice(0, pokemonsVisiveis).map((pokemon, index) => (
                     <Link to={`/Perfil/${pokemon.name}`} onClick={() => setPokemonData(pokemon)} key={index}>
                        <Card
                           img={pokemon.sprites.other.dream_world.front_default}
                           img2={pokemon.sprites.other.home.front_default}
                           name={pokemon.name}
                           types={pokemon.types}
                           id={pokemon.id}
                        />
                     </Link>
                  ))}

            </Lista>

            {pokemonsVisiveis < limitPokemons && (
               <Button onClick={handlerShowMore} background="#437bff">Buscar Mais</Button>
            )}

            {pokemonsVisiveis > limitPokemons - 1 && (
               <Button onClick={goUpTop}>Subir para Topo</Button>
            )}
         </main>
      </Provider>
   )
}

PokemonList.propTypes = {
   setPokemonData: PropTypes.func.isRequired
};

