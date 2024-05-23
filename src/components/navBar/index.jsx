import { Link } from "react-router-dom";
import iconLogo from "../../assets/image/logo-icon.png"
import logoPokemon from "../../assets/image/pokemon-logo.png"
import { IconLogo, Logo, Nav } from "./styledNav";
import PokeSearch from '../pokeSearch';
import PokeTypesFiltered from '../pokeTypes';

export const NavBar = () => {
   return (
      <>
         <Nav >
            <Link to={"/"}>
               <IconLogo src={iconLogo} alt="Logo-icon" />
            </Link>
            <Logo src={logoPokemon} alt="Logo" />
            <div>
               <PokeSearch />
               <PokeTypesFiltered />
            </div>
         </Nav>
      </>
   )
}
