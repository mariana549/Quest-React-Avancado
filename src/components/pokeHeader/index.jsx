import logoPokemon from "../../assets/image/pokemon-logo.png"
import { Logo, Header, Div, Box, BoxsContainer } from "./styledHeader";
import PokeSearch from '../../services/pokeSearch';
import PokeTypesFiltered from '../../services/pokeFiltros/pokeTypes/PokeTypesFiltered';
import Container from "../container";
import { useContext } from "react";
import Context from "../../contexts/pokeDados/context";
import { filteredPokemonsName } from "../../services/pokeFiltros/pokeSprites/pokeSprites";

export const PokeHeader = () => {
   const { pokemons } = useContext(Context)

   const pokeNames = ["pikachu", "charmander", "bulbasaur", "squirtle"];
   const imgs = filteredPokemonsName(pokemons, pokeNames)

   return (
      <>
         <Header >
            <Container>
               <Div>
                  <Logo src={logoPokemon} alt="Logo" />
                  <BoxsContainer>
                     <Box>
                        {imgs.map((gif, i) =>
                           <img src={gif} key={i} alt="" />
                        )}
                     </Box>
                     <Box>
                        <PokeSearch />
                        <PokeTypesFiltered />
                     </Box>
                  </BoxsContainer>
               </Div>
            </Container>
         </Header>
      </>
   )
}

