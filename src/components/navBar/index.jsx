import styled from "styled-components"
import PropTypes from 'prop-types';

export const NavBar = ({getPokemons}) => {
   return (
      <>
         <Nav>
            <img src="public/assests/image.png" alt="Logo"/>
            <h1>Pokemon</h1>
            <Pesquisar type="text" placeholder="Pesquisando...." className="pesquisando" onChange={e => getPokemons(e.target.value)}/>
         </Nav>
      </>
   )
}

const Nav = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: black;
   color: #F85B44;
   font-size: 50px;
   width: 100%;
   height: 200px;
`

const Pesquisar = styled.input`
   background-color: #f0f8ffa7;
   padding: 10px;
   color: black;
   border: solid 1px #F85B44;
   border-radius: 10px;
`
NavBar.propTypes  = {
   getPokemons: PropTypes.func.isRequired 
}
