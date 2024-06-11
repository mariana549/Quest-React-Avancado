import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { DescriptionAbilities, Li, Name } from "./styledAbilities";

export const HabilitiePokemon = ({url, name, type}) => {
   const [pokemonData, setPokemonData] = useState({});

  //  const descriptionAbilitiesEn = pokemonData.filter(e => e.language.name === "en")

  const getUrl = async () => {
    const response = await axios.get(url)
    const data = response.data.effect_entries
    setPokemonData(data)
  }

   useEffect(() => {
      // getUrl()
   }, []);
 
   return (
     <Li>
       <Name className={type}>{name}: </Name>
       <DescriptionAbilities> Unable to render description</DescriptionAbilities>
       {/* <DescriptionAbilities>{descriptionAbilitiesEn.map(e => e.effect)}</DescriptionAbilities> */}
     </Li>
   );
}


HabilitiePokemon.propTypes = {
   name: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
   type: PropTypes.object.isRequired,
};