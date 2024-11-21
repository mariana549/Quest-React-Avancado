import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import Context from "../../../contexts/pokeDados/context";
import { getAbilty } from "../../../services/requestApi";
import { DescriptionAbilities, Li, Name } from "./styledAbilities";

export const HabilitiePokemon = ({ name }) => {
  const { type } = useContext(Context);
  const [pokemonData, setPokemonData] = useState(null);
  const [habilites, setHabilites] = useState([{ effect: "" }]);
  
  useEffect(() => {
    const getUrl = async () => {
      const response = await getAbilty(name);
      setPokemonData(response);
    };
    getUrl();
  }, [name]);

  useEffect(() => {
    if (pokemonData) {
      const descriptionAbilitiesEn = pokemonData?.filter(
        (e) => e.language.name === "en"
      );
      setHabilites(descriptionAbilitiesEn);
    }
  }, [pokemonData]);

  return (
    <Li>
      <Name className={type}>{name}: </Name>
      <DescriptionAbilities>
        {habilites.map((e) => e?.effect)}
      </DescriptionAbilities>
    </Li>
  );
};

HabilitiePokemon.propTypes = {
  name: PropTypes.string.isRequired,
};
