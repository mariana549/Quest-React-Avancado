import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from "styled-components";
// import { ThemeContext } from '../contexts/themeContext';

export default function Card({ img, img2, name }) {
   const [isImage1, setIsImage1] = useState(true);

   // const { theme } = useContext(ThemeContext)
   // console.log(theme); 

   const handleMouseEnter = () => {
      setIsImage1(!isImage1);
   };

   return (
      <Item>
         <NomePokemon>{name}</NomePokemon>
         <div onMouseEnter={handleMouseEnter}>
            <PokemonImage src={isImage1 ? img : img2} alt={name} />
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
   }
`;

const PokemonImage = styled.img`
   width: 150px;
   height: 150px;
   margin: 0;
   transition: transform 0.5s ease;
`;

const NomePokemon = styled.h2`
   font-size: 25px;
   color: #fff;
   text-transform: capitalize;
   padding-left: 10px;
`;

Card.propTypes = {
   img: PropTypes.string.isRequired,
   img2: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
};
