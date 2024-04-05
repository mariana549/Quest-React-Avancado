import styled from "styled-components"
import PropTypes from 'prop-types';

export const NavBar = ({ getPokemons }) => {
   return (
      <>
         <Nav>
            <Div>
               <img src="public/assets/image/image.png" alt="Logo-icon" />
               <Logo src="public/assets/image/pokemon-logo.png" alt="Logo" />
            </Div>
            <Pesquisar type="text" placeholder="Pesquisando...." className="pesquisando" onChange={e => getPokemons(e.target.value)} />
         </Nav>
      </>
   )
}

const Nav = styled.nav`
   display: flex;
   align-items: center;
   background-color: black;
   color: #F85B44;
   width: 100%;
   height: 200px;
`

const Div = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
`

const Pesquisar = styled.input`
   background-color: #2e6db541;
   padding: 10px;
   color: black;
   border: solid 1px #FFCB05;
   border-radius: 10px;
`
const Logo = styled.img`
   width: 300px;
`

NavBar.propTypes = {
   getPokemons: PropTypes.func.isRequired
}
