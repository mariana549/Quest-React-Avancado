import { useEffect, useState } from "react";
import Card from "../pokeCards";
import { PokeHeader } from "../../pokeHeader";
import { Button } from "../../pokeButton";
import { Error, Lista, Main } from "./styledPokemonList";
import Provider from "../../../contexts/pokeDados/Provider";
import { goUpTop } from "../../../utils/scrollToButton";
import { getPokedex, getPokemon } from "../../../services/requestApi";
import Container from "../../container";
import axios from "axios";
import CardLoanding from "../../../utils/cardLoading";
import { limitPokemons } from "../../../utils/constants/constants";

export const PokemonList = () => {
   const [pokemons, setPokemon] = useState([])
   const [pokemonsVisiveis, setPokemonVisiveis] = useState(10)
   const [loading, setLoading] = useState(true);
   const [showButtons, setShowButtons] = useState(true);

   const pokemonsList = pokemons.slice(0, pokemonsVisiveis)

   useEffect(() => {
      const fechPokemon = async () => {
         try {
            // esse trecho faz uma chamada na api de 10 em 10 pokemons, para não sobrecarregar o site.
            const data = await getPokedex(pokemonsVisiveis, 0);

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
   }, [pokemonsVisiveis])

   const handlerShowMore = () => {
      setPokemonVisiveis((pokemonsVisiveis) =>
         // esse trecho verifica toda vez que essa função executada se os pokemons Visiveis ja atingiu o limite.
         pokemonsVisiveis !== limitPokemons ? pokemonsVisiveis + 10 : pokemonsVisiveis);
   }

   return (
      <Provider value={{ pokemons: pokemons, setPokemon: setPokemon, setShowButtons: setShowButtons }}>
         <PokeHeader />
         <Main>
            <Container>
               <Lista>
                  {loading ?
                     <CardLoanding />
                     :
                     // nesse trecho verifica se tem pokemons, se tiver vai renderizar os cards de 0 a o numero de pokemons Visiveis, se não, vai mostrar a mensagem de error.
                     (pokemons.length > 0 ?
                        <Card pokemon={pokemonsList}/> :
                        <Error>pokemons not found or undefined</Error>)
                  }
               </Lista>
               {showButtons && pokemonsVisiveis < limitPokemons && (
                  <Button onClick={handlerShowMore} background="#437bff">Search More</Button>
               )}
               {showButtons && pokemonsVisiveis > limitPokemons - 1 && (
                  <Button onClick={goUpTop}>Go up to</Button>
               )}
            </Container>
         </Main>
      </Provider>
   )
}

