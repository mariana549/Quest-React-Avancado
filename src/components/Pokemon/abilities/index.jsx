import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { DescriptionAbilities, Li, Name } from "./styledAbilities";
import { getAbilty } from "../../../services/requestApi";

export const HabilitiePokemon = ({url, name, type}) => {
   const [pokemonData, setPokemonData] = useState({});

   console.log(pokemonData)
      // pokemonData não funciona porque tem ter uma forma assincrona de pegar as informações se não, não aparece na tela é da error.
    // const descriptionAbilitiesEn =  pokemonData.filter(e => e.language.name === "en")
    
    useEffect(() => {
      const getUrl = async () => {
        const response = await getAbilty(name)
        setPokemonData(response)
     }
    getUrl()
  }, []);
 
   return (
     <Li>
       <Name className={type}>{name}: </Name>
       <DescriptionAbilities> Unable to render description</DescriptionAbilities>
       {/* <DescriptionAbilities>{pokemonData.map(e => e.effect)}</DescriptionAbilities> */}
     </Li>
   );
}


HabilitiePokemon.propTypes = {
   name: PropTypes.string.isRequired,
   url: PropTypes.string.isRequired,
   type: PropTypes.object.isRequired,
};