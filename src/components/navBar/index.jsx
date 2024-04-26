import styled from "styled-components"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import iconLogo from "../../assets/image/logo-icon.png"
import logoPokemon from "../../assets/image/pokemon-logo.png"

export const NavBar = ({ getPokemons }) => {
   return (
      <>
         <Nav >
            <Link to={"/"}>
               <IconLogo src={iconLogo} alt="Logo-icon" />
            </Link>
            <Logo src={logoPokemon} alt="Logo" />
            {getPokemons ? (
               <Pesquisar type="text" placeholder="Pesquisando...." className="pesquisando" onChange={e => getPokemons(e.target.value)} />)
               : null}
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

const Pesquisar = styled.input`
   background-color: #2e6db541;
   padding: 10px;
   color: black;
   border: solid 2px #2e6db5;
   border-radius: 10px;

   &:hover {
      box-shadow: 1px 1px 10px #FFCB05;
   }
`
const Logo = styled.img`
   width: 300px;
   transition: transform 0.3s ease; 

   &:hover {
      transform: translateY(-10px);
   }
`

const IconLogo = styled.img`
   width: 130px;
   transition: transform 0.3s ease; 

   &:hover {
      transform: rotate(360deg)
   }
`;


NavBar.propTypes = {
   getPokemons: PropTypes.func.isRequired
}
