import styled from "styled-components"
import PropTypes from 'prop-types';

export const NavBar = ({ getPokemons }) => {
   return (
      <>
         <Nav>
            <Div>
               <img src="public/assests/image.png" alt="Logo" />
               <h1>Pokemon</h1>
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
   font-size: 50px;
   width: 100%;
   height: 200px;
`

const Div = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
`

const Pesquisar = styled.input`
   background-color: #f85c4439;
   padding: 10px;
   color: black;
   border: solid 1px #F85B44;
   border-radius: 10px;
`
NavBar.propTypes = {
   getPokemons: PropTypes.func.isRequired
}
