import { Link } from "react-router-dom";

import logoPokemon from "../../assets/image/pokemon-logo.png"
import { Logo, Nav } from "./styledNav";
import PokeSearch from '../pokeSearch';
import PokeTypesFiltered from '../pokeTypes';

export const NavBar = () => {
   return (
      <>
         <Nav >
            <Link to={"/"}>
               <Logo src={logoPokemon} alt="Logo" />
            </Link>
               <PokeSearch />
               <PokeTypesFiltered />
         </Nav>
      </>
   )
}
