import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import iconLogo from "../../assets/image/logo-icon.png"
import logoPokemon from "../../assets/image/pokemon-logo.png"
import { IconLogo, Logo, Nav, Option, Pesquisar, SelectTypes } from "./styledNav";

export const NavBar = ({ getPokemons, getPokemonsTypes }) => {
   return (
      <>
         <Nav >
            <Link to={"/"}>
               <IconLogo src={iconLogo} alt="Logo-icon" />
            </Link>
            <Logo src={logoPokemon} alt="Logo" />
            <div>
               {getPokemons ? (
                  <Pesquisar placeholder="Pesquisando...." className="pesquisando" onChange={e => getPokemons(e.target.value)} />)
                  : null}
               {getPokemonsTypes ? (
                  <SelectTypes value="types" onChange={e => getPokemonsTypes(e.target.value)}>
                     <Option value="" />
                     <Option value="bug">bug</Option>
                     <Option value="dark">dark</Option>
                     <Option value="dragon">dragon</Option>
                     <Option value="electric">electric</Option>
                     <Option value="fairy">fairy</Option>
                     <Option value="fighting">fighting</Option>
                     <Option value="fire">fire</Option>
                     <Option value="flying">flying</Option>
                     <Option value="ghost">ghost</Option>
                     <Option value="ground">ground</Option>
                     <Option value="ice">ice</Option>
                     <Option value="normal">normal</Option>
                     <Option value="poison">poison</Option>
                     <Option value="psychic">psychic</Option>
                     <Option value="rock">rock</Option>
                     <Option value="steel">steel</Option>
                     <Option value="water">water</Option>
                  </SelectTypes>)
                  : null}
            </div>
         </Nav>
      </>
   )
}

NavBar.propTypes = {
   getPokemons: PropTypes.func.isRequired,
   getPokemonsTypes: PropTypes.any.isRequired
}
