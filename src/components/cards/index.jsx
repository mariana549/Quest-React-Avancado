import PropTypes from 'prop-types';
import styled from "styled-components";

export default function Card({ img , name}) {
   return (
      <>
         <Item>
            <Box>
               <PokemonImage src={img} alt={name}/>
            </Box>
            <h2>{name}</h2>
         </Item>
      </>
   )
}

const Item = styled.li`
   width: 270px;
   height: 170px;
   background: #fffbf2;
   border: solid 2px black;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
`

const PokemonImage = styled.img`
   width: 150px;
   height: 150px;
   position: absolute;
`

const Box = styled.div`
   position: relative;
   width: 40%;
   height: 100%;
`

Card.propTypes = {
   img: PropTypes.string.isRequired ,
   name: PropTypes.string.isRequired 
 };
