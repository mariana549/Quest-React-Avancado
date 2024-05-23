// import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Box, Div, Id, Item, NomePokemon, PokemonImage, Tipo, TypesList } from './styledCards';

export default function Card({ img, img2, name, types, id }) {
   // const [isImage, setIsImage] = useState(true);
   // const [prevImage, setPrevImage] = useState(img);


   // const toggleImage = () => {
   //    setIsImage(!isImage);
   // };

   // const timeoutDuration = 2500; 

   // useEffect(() => {
   //    if (prevImage !== (isImage ? img : img2)) {
   //       const timeout = setTimeout(() => {
   //          setIsImage(true);
   //          setPrevImage(img);
   //       }, timeoutDuration);

   //       return () => clearTimeout(timeout);
   //    }
   // }, [isImage,  prevImage]);

   return (
      <Item>
         <Box>
            <Id>#{id}</Id>
            <NomePokemon>{name}</NomePokemon>
            <TypesList>
                 {types.map((type, i) => (
                   <Tipo key={i}>{type.type.name}</Tipo>
                 ))}
            </TypesList>
         </Box>
         <Div>
            <PokemonImage src={ img === null ? img2 : img } alt={name} />
         </Div>
      </Item>
   );
}

Card.propTypes = {
   img: PropTypes.string.isRequired,
   img2: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   types: PropTypes.any.isRequired
};
