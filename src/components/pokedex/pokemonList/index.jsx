import { useEffect, useState } from "react";
import Card from "../pokeCards";
import PropTypes from 'prop-types';
import { PokeHeader } from "../../pokeHeader";
import { Button } from "../../pokeButton";
import { Lista, Main } from "./styledPokemonList";
import Provider from "../../../contexts/pokeDados/Provider";
import { goUpTop } from "../../../utils/scrollToButton";
import { getPokedex, getPokemon } from "../../../services/requestApi";
import Container from "../../container";
import axios from "axios";
import CardLoanding from "../../../utils/cardLoading";

export const PokemonList = ({ setPokemonData }) => {
   const [pokemons, setPokemon] = useState([])
   const [pokemonsVisiveis, setPokemonVisiveis] = useState(10)
   const [loading, setLoading] = useState(true);
   const limitPokemons = 100;

   useEffect(() => {
      const fechPokemon = async () => {
         try {
            const data = await getPokedex(limitPokemons, 0);

            const namesPokemons = data.map(poke => poke.name)

            const pokePromises = await namesPokemons.map(async (pokeName) => await getPokemon(pokeName))

            const pokeDados = await axios.all(pokePromises)

            setPokemon([...pokeDados])
            setLoading(false)
         } catch (error) {
            console.error(`Error fetching Pokemon API: ${error.message}`)
         }
      }
      fechPokemon()
   }, [])

   const handlerShowMore = () => {
      setPokemonVisiveis(pokemonsVisiveis + 10);
   }

   return (
      <Provider value={{ pokemons: pokemons, setPokemon: setPokemon }}>
         <PokeHeader />
         <Main>
            <Container>
               <Lista>
                  {loading ?
                     <CardLoanding />
                     :
                     (pokemonsVisiveis > 0 ?
                        <Card pokemon={pokemons} setPokemonData={setPokemonData} /> : "pokemons undefined")
                  }
               </Lista>
               {pokemonsVisiveis < limitPokemons && (
                  <Button onClick={handlerShowMore} background="#437bff">Buscar Mais</Button>
               )}
               {pokemonsVisiveis > limitPokemons - 1 && (
                  <Button onClick={goUpTop}>Subir para Topo</Button>
               )}
            </Container>
         </Main>
      </Provider>
   )
}

PokemonList.propTypes = {
   setPokemonData: PropTypes.func.isRequired
};

