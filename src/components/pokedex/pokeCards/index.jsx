import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Box,
  Div,
  Id,
  Item,
  NomePokemon,
  PokeCards,
  PokemonImage,
  Tipo,
  TypesList,
} from "./styledCards.js";

export default function Card({ pokemon }) {
  return (
    <PokeCards>
      {pokemon.map((poke, i) => {
        const img = poke.sprites?.other?.["official-artwork"]?.front_default;
        return (
          <Link to={`../Perfil/${poke.name}`} key={i} name={poke.name}>
            <Item>
              <Box>
                <Id>#{poke.id}</Id>
                <NomePokemon>{poke.name}</NomePokemon>
                <TypesList>
                  {poke.types.map((type, i) => (
                    <Tipo key={i}>{type.type.name}</Tipo>
                  ))}
                </TypesList>
              </Box>
              <Div>
                <PokemonImage src={img} alt={poke.name} />
              </Div>
            </Item>
          </Link>
        );
      })}
    </PokeCards>
  );
}

Card.propTypes = {
  pokemon: PropTypes.array.isRequired,
};
