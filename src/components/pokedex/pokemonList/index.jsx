import { useContext } from "react";
import Context from "../../../contexts/pokeDados/context";
import { handlerShowMore } from "../../../functions/handleShowMore";
import { goUpTop } from "../../../functions/scrollToButton";
import CardLoanding from "../../../utils/cardLoading";
import { limitPokemons } from "../../../utils/constants/constants";
import Container from "../../container";
import { Button } from "../../pokeButton";
import Card from "../pokeCards";
import { Error, Lista, Main } from "./styledPokemonList";

export const PokemonList = () => {
  const {
    pokemons,
    loading,
    pokemonsList,
    showButtons,
    pokemonsVisiveis,
    setPokemonVisiveis,
  } = useContext(Context);
  
  return (
    <Main>
      <Container>
        <Lista>
          {loading ? (
            <CardLoanding />
          ) : // nesse trecho verifica se tem pokemons, se tiver vai renderizar os cards de 0 a o numero de pokemons Visiveis, se não, vai mostrar a mensagem de error.
          pokemons.length > 0 ? (
            <Card pokemon={pokemonsList} />
          ) : (
            <Error>pokemons not found or undefined</Error>
          )}
        </Lista>
        {showButtons && pokemonsVisiveis < limitPokemons && (
          <Button
            onClick={() => handlerShowMore(setPokemonVisiveis)}
            background="#437bff"
          >
            Search More
          </Button>
        )}
        {showButtons && pokemonsVisiveis > limitPokemons - 1 && (
          <Button onClick={goUpTop}>Go up to</Button>
        )}
      </Container>
    </Main>
  );
};
