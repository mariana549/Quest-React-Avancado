import logoPokemon from "../../assets/image/pokemon-logo.png"
// import pokeImg from "../../assets/image/pokemonsImg.jpg"
import { Logo, Header, Div, Box, BoxsContainer } from "./styledHeader";
import PokeSearch from '../pokeSearch';
import PokeTypesFiltered from '../pokeTypes';
import Container from "../container";
import { useContext } from "react";
import Context from "../../contexts/pokeDados/context";

export const PokeHeader = () => {
   const {pokemons} = useContext(Context)
   const pokeNames = ["pikachu", "charmander", "bulbasaur", "squirtle"];   
   const filteredPokemonsName = pokemons
       .filter(pokemon => pokeNames.includes(pokemon.name))
       .map(e => e.sprites.other.showdown.front_default);

   return (
      <>
         <Header >
            <Container>
               <Div>
                  <Logo src={logoPokemon} alt="Logo" />
                     <BoxsContainer>
                        <Box>
                           {filteredPokemonsName.map((gif, i) =>
                              <img src={gif} key={i} alt="" />
                           )}
                        </Box>
                        <Box>
                           <PokeSearch />
                           <PokeTypesFiltered />
                        </Box>
                     </BoxsContainer>
                  {/* <PokesImg src={pokeImg} alt="imagem pokemons" /> */}
               </Div>
            </Container>
         </Header>
      </>
   )
}

