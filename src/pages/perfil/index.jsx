import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import arrow from "../../assets/image/seta-esquerda.png";
import Container from "../../components/container";
import HeaderPerfil from "../../components/Pokemon/headerPerfil";
import { PokemonSobre } from "../../components/Pokemon/sobre";
import Provider from "../../contexts/pokeDados/Provider";
import { getPokemon } from "../../services/requestApi";
import { ArrowReturn, DivLoading, Loading, Main, Return } from "./perfilStled";

export const Perfil = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [type, setType] = useState({ type: { name: "fire" } });
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemon(name);
      console.log(data, "data");
      setPokemon(data);
    }
    fetchData();
  }, [name]);

  useEffect(() => {
    if (pokemon) {
      const types = pokemon.types[0];
      const pesoKg = pokemon.weight / 10;
      const alturaM = pokemon.height / 10;

      setType(types);
      setPeso(pesoKg);
      setAltura(alturaM);
    }
  }, [pokemon]);

  if (pokemon === null) {
    return (
      <DivLoading>
        <Link to="/">
          <ArrowReturn src={arrow} alt="Return" />
        </Link>
        <Loading>Loading...</Loading>
      </DivLoading>
    );
  }

  return (
    <Provider
      value={{
        pokemon: pokemon,
        type: type,
        peso: peso,
        altura: altura,
      }}
    >
      <Main className={type}>
        <Link to="/">
          <ArrowReturn src={arrow} alt="Return" />
        </Link>
        <Container>
          <HeaderPerfil />
          <PokemonSobre />
          <Link to="/">
            <Return className={type}>Return</Return>
          </Link>
        </Container>
      </Main>
    </Provider>
  );
};
