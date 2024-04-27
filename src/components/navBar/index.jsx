import styled from "styled-components"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import iconLogo from "../../assets/image/logo-icon.png"
import logoPokemon from "../../assets/image/pokemon-logo.png"

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

const Nav = styled.nav`
   display: flex;
   align-items: center;
   background-color: black;
   width: 100%;
   height: 160px;
   box-shadow: 0px 5px 8px #000000a3;
`

const Logo = styled.img`
   width: 300px;
   transition: transform 0.3s ease; 
   
   &:hover {
      transform: translateY(-10px);
   }

   @media (max-width: 1200px) {
      width: 250px;
   }

   @media (max-width: 768px) {
      width: 200px;
   }

   @media (max-width: 500px) {
      display: none;
   }
`

const IconLogo = styled.img`
   width: 130px;
   transition: transform 0.3s ease; 

   &:hover {
      transform: rotate(360deg)
   }

   @media (max-width: 1200px) {
      width: 100px;
   }

   @media (max-width: 768px) {
      width: 80px;
   }
`

const Pesquisar = styled.input`
   background-color: #2e6db541;
   padding: 10px;
   color: white;
   border: solid 2px #2e6db5;
   border-radius: 10px;

   &:hover {
      box-shadow: 1px 1px 10px #FFCB05;
   }

   @media (max-width: 1200px) {
   width: 140px;
   }

   @media (max-width: 768px) {
      width: 110px;
   }
`

const SelectTypes = styled.select`
   background-color: #2e6db541;
   padding: 10px;
   color: #ffcb05;
   border: solid 2px #2e6db5;
   border-radius: 10px;
   margin-left: 5px;
   cursor: pointer;

   @media (max-width: 1200px) {
   width: 50px;
   }

   @media (max-width: 768px) {
      width: 20px;
   }
`

const Option = styled.option`
   background-color: #000000;
   cursor: pointer;
`

NavBar.propTypes = {
   getPokemons: PropTypes.func.isRequired,
   getPokemonsTypes: PropTypes.any.isRequired
}
