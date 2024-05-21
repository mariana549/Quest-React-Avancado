import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

export const HabilitiePokemon = ({url, name}) => {
   const [pokemonData, setPokemonData] = useState({});

  const getUrl = async () => {
    const response = await axios.get(url)
    const data = response.data.effect_entries
    setPokemonData(data)
  }

   useEffect(() => {
      getUrl()
   }, []);
 
   return (
     <Li>
         <Name>{name}</Name>:  {pokemonData[0].effect} 
     </Li>
   );
}

const Li = styled.li`
  width: 100%;
  color: #b7b6b6;
  padding: 6px;
  cursor: default;

  @media (max-width: 768px){
    font-size: 0.85rem;
  }
`

const Name = styled.span`
   font-weight: bold;
   color: #fee48e
`

HabilitiePokemon.propTypes = {
   name: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired
};