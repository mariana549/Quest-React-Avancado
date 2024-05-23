import logoPokemon from "../../assets/image/pokemon-logo.png"
import { Logo, Header, Div, Box } from "./styledHeader";
import PokeSearch from '../pokeSearch';
import PokeTypesFiltered from '../pokeTypes';
import Container from "../container";

export const NavBar = () => {
   return (
      <>
         <Header >
            <Container>
               <Div>
                  <Logo src={logoPokemon} alt="Logo" />
                  <Box>
                     <PokeSearch />
                     <PokeTypesFiltered />
                  </Box>
               </Div>
            </Container>
         </Header>
      </>
   )
}
