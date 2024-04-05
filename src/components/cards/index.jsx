import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from "styled-components";

export default function Card({ img , img2 , name }) {
   const [isImage1, setIsImage1] = useState(true);

   const handleMouseEnter = () => {
      setIsImage1(!isImage1);
    };

   return (
      <>
         <Item>
            <NomePokemon>{name}</NomePokemon>
            <div onMouseEnter={handleMouseEnter}>
               <PokemonImage src={isImage1 ? img : img2} alt={name}/> 
            </div>
         </Item>
      </>
   )
}



const Item = styled.li`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 300px;
   height: 150px;
   background: #fffbf2;
   border: solid 2px black;
   border-radius: 20px;
   transition: transform 0.3s ease; 

   &:hover {
      transform: translateY(-5px);
   }
`

const PokemonImage = styled.img`
   width: 150px;
   height: 150px;
   margin: 0;
   transition: transform 0.5s ease; 

   &:hover {
      transform: rotateY(180deg);
   }
`
const NomePokemon = styled.h2`
   font-size: 25px;
   color: #141313;
   text-transform: capitalize;
   padding-left: 10px;
`


Card.propTypes = {
   img: PropTypes.string.isRequired ,
   img2: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired 
 };
