import { Link } from "react-router-dom";

import logoPokemon from "../../assets/image/pokemon-logo.png"
import { Logo, Nav, Div } from "./styledNav";
import PokeSearch from '../pokeSearch';
import PokeTypesFiltered from '../pokeTypes';
import Container from "../container";

export const NavBar = () => {
   return (
      <>
         <Nav >
            <Container>
                  <Div>
                     <Link to={"/"}><Logo src={logoPokemon} alt="Logo" /></Link>
                        <PokeSearch />
                        <PokeTypesFiltered />
                  </Div>
            </Container>
         </Nav>
      </>
   )
}
