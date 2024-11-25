import { useContext } from "react";
import logoPokemon from "../../assets/image/pokemon-logo.png";
import PokeContext from "../../contexts/pokeContext/context";
import { getPokemonSpritesByName } from '../../functions/getPokemonSpritesByName.js';
import PokeSearch from "../../utils/pokeFilters/pokeSearch/index";
import PokeTypesFiltered from "../../utils/pokeFilters/pokeTypes/PokeTypesFiltered";
import Container from "../container/index";
import { Box, BoxsContainer, Div, Header, Logo } from "./styledHeader.js";

export const PokeHeader = () => {
  const { pokemons } = useContext(PokeContext);

  const pokeNames = ["pikachu", "charmander", "bulbasaur", "squirtle"];
  const pokeImageFiltered = getPokemonSpritesByName(pokemons, pokeNames);

  return (
    <>
      <Header>
        <Container>
          <Div>
            <Logo src={logoPokemon} alt="Logo" />
            <BoxsContainer>
              <Box>
                {pokeImageFiltered.map((gif, i) => (
                  <img src={gif} key={i} alt="" />
                ))}
              </Box>
              <Box>
                <PokeSearch />
                <PokeTypesFiltered />
              </Box>
            </BoxsContainer>
          </Div>
        </Container>
      </Header>
    </>
  );
};
