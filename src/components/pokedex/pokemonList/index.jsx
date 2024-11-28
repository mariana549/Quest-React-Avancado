import { useContext, useEffect } from "react";
import PokeContext from "../../../contexts/pokeContext/pokeContext.jsx";
import { handlerShowMore } from "../../../functions/handleShowMore.js";
import CardLoanding from "../../../utils/cardLoading";
import Container from "../../container";
import { Button } from "../../pokeButton";
import Card from "../pokeCards";
import { Error, Lista, Main } from "./styledPokemonList.js";
import { ButtonScroll } from "../../../utils/ButtonScroll/index.jsx";

export const PokemonList = () => {
  const {
    pokemons,
    loading,
    pokemonsList,
    showButtons,
    pixels,
    setPokemonsVisiveis,
    setShowButtons,
    setPixels,
  } = useContext(PokeContext);

  useEffect(() => {
    if (pokemons.length > 0) {
      setShowButtons(true);
    } else {
      setShowButtons(false);
    }
  }, [pokemons, setShowButtons]);

  if (loading)
    return (
      <Main>
        <Container>
          <CardLoanding />
        </Container>
      </Main>
    );

  const renderPokemonCards = () => {
    if (pokemons.length > 0) {
      return <Card pokemon={pokemonsList} />;
    } else {
      return <Error>pokemons not found or undefined</Error>;
    }
  };

  return (
    <Main>
      <Container>
        <Lista>{renderPokemonCards()}</Lista>
        {showButtons && pokemonsList.length < pokemons.length && (
          <Button
            onClick={() => handlerShowMore(setPokemonsVisiveis, setPixels)}
            background="#437bff"
          >
            Search More
          </Button>
        )}
        {pixels > 800 && <ButtonScroll />}
      </Container>
    </Main>
  );
};
