import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled from "styled-components";

export default function Card({ img, img2, name, types }) {
   const [isImage, setIsImage] = useState(true);
   const [prevImage, setPrevImage] = useState(img);

   const toggleImage = () => {
      setIsImage(!isImage);
   };

   const timeoutDuration = 2500; 

   useEffect(() => {
      if (prevImage !== (isImage ? img : img2)) {
         const timeout = setTimeout(() => {
            setIsImage(true);
            setPrevImage(img);
         }, timeoutDuration);

         return () => clearTimeout(timeout);
      }
   }, [isImage, img, img2, prevImage]);

   return (
      <Item>
         <Box>
            <NomePokemon>{name}</NomePokemon>
            <TypesList>
                 {types.map((type, i) => (
                   <Tipo key={i}>{type.type.name}</Tipo>
                 ))}
            </TypesList>
         </Box>
         <div onMouseEnter={toggleImage}>
            <PokemonImage src={isImage ? img : img2} alt={name} />
         </div>
      </Item>
   );
}

const Item = styled.li`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 300px;
   height: 150px;
   background: #000000a9;
   border: solid 2px #fff;
   border-radius: 20px;
   transition: transform 0.3s ease;

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 0px 10px white;
   }
`;

const PokemonImage = styled.img`
   width: 150px;
   height: 150px;
   margin: 0;
   transition: transform 0.5s ease;
`;

const Box = styled.div`
   padding-left: 10px;
`

const NomePokemon = styled.h2`
   font-size: 25px;
   color: #fff;
   text-transform: capitalize;
`;

const TypesList = styled.ul`
   display: flex;
   padding-top: 10px;
`

const Tipo = styled.li`
   color: #959594;
   font-weight: bold;
   font-size: 14px;
`

Card.propTypes = {
   img: PropTypes.string.isRequired,
   img2: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   types: PropTypes.string.isRequired
};
