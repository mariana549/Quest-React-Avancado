import styled from "styled-components"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "../contexts/themeContext";
import { ThemeToggleButton } from "../toggleThemeButton";
import { useContext } from "react";

export const NavBar = ({ getPokemons }) => {
   const { theme } = useContext(ThemeContext)

   return (
      <>
         <ThemeProvider>
            <Nav theme={theme}>
               <Link to={"/"}>
                  <IconLogo src="../image/logo-icon.png" alt="Logo-icon" />
               </Link>
               <Logo src="public/assets/image/pokemon-logo.png" alt="Logo" />
               <ThemeToggleButton />
               {getPokemons ? (
                  <Pesquisar type="text" placeholder="Pesquisando...." className="pesquisando" onChange={e => getPokemons(e.target.value)} /> )
               : null}
            </Nav>
         </ThemeProvider>
      </>
   )
}

const Nav = styled.nav`
   display: flex;
   align-items: center;
   background-color: ${({ theme }) => theme.navBarBg};
   width: 100%;
   height: 200px;
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
