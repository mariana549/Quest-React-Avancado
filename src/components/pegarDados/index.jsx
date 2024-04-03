import axios from "axios"
import { useEffect, useState } from "react";
import Card from "../cards";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const GetData = () => {
   const [pokemonData, getPokemonData] = useState([])
   const [pokemonsVisiveis, setPokemonVisiveis] = useState(10)

   const axiosData = async () => {
      try {
         const urls = [];
         for (let i = 1; i <= 50; i++) urls.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);

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

   const handlerShowMore = () => {
      setPokemonVisiveis(pokemonsVisiveis => pokemonsVisiveis + 10);
   }

   return (
      <>
         <h1>Pokemons</h1>

         <Deck>
            <Lista>
               {pokemonData.slice(0, pokemonsVisiveis).map((pokemon, index) => (
                  <Card key={index}>
                     <Link to={`/pokemon/${pokemon.id}`}>
                        <Item>
                           <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                           <h2>{pokemon.name}</h2>
                        </Item>
                     </Link>
                  </Card>
               ))}
            </Lista>
         </Deck>

         {pokemonsVisiveis < 1002 && (
            <button onClick={handlerShowMore}>Buscar Mais</button>
         )}
      </>
   )
}

const Deck = styled.section`
   max-width: 875px;
   padding: 25px;
`

const Lista = styled.ul`
   display: flex;
   flex-wrap: wrap;
   width: 100%;
   gap: 15px;
`

const Item = styled.li`
   width: 150px;
   height: 250px;
   background: #fffbf2;
   border: solid 2px black;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
`