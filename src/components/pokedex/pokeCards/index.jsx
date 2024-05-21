import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Box, Item, NomePokemon, PokemonImage, Tipo, TypesList } from './styledCards';

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

Card.propTypes = {
   img: PropTypes.string.isRequired,
   img2: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   types: PropTypes.any.isRequired
};
