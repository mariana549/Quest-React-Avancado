import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import Context from "../../../contexts/perfilContext/context.jsx";
import { getAbility } from "../../../services/requestApi/getAbility.js";
import { DescriptionAbilities, Li, Name } from "./styledAbilities.js";

export const HabilitiePokemon = ({ name }) => {
  const { type } = useContext(Context);
  const [pokemonData, setPokemonData] = useState(null);
  const [habilites, setHabilites] = useState([{ effect: "" }]);

  useEffect(() => {
    const abilityData = async () => {
      const response = await getAbility(name);
      setPokemonData(response);
    };
    abilityData();
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
