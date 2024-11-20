import { Link, useParams } from "react-router-dom";
import {
  Box,
  ConteudoBox,
  H3,
  Hr,
  Imagem,
  ImgContainer,
  Main,
  PerfilTitulo,
  PokeId,
  Tipo,
  TypesList,
  Return,
  Div,
  Imagem2,
} from "./styledPerfil";
import Container from "../../container";
import { HabilitiePokemon } from "../abilities";
import Moves from "../moves";
import { useEffect, useState } from "react";
import { getPokemon } from "../../../services/requestApi";
import TableDados from '../tableDados';

export const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [type, setType] = useState({slot: 1, type: {name: 'fire'}});
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

  if (pokemon == null) {
    return <div style={{color: 'blue', background: "black"}}>Loading...</div>;
  }

  return (
    <Main className={type}>
      <Container>
        <Div>
          <PerfilTitulo className={type}>
            {pokemon?.name}
          </PerfilTitulo>
          <PokeId>#{pokemon?.id}</PokeId>
        </Div>
        <ImgContainer>
          <abbr title="Normal version">
            <Imagem
              src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
              alt={pokemon?.name}
              style={{
                transform: "translateX(20px)",
              }}
            />
          </abbr>
          <abbr title="Shiny version">
            <Imagem2
              src={pokemon?.sprites?.other?.["official-artwork"]?.front_shiny}
              alt={pokemon?.name}
            />
          </abbr>
        </ImgContainer>
        <TypesList>
          {pokemon?.types.map((type, i) => (
            <Tipo key={i}>{type.type.name}</Tipo>
          ))}
        </TypesList>
        <ConteudoBox>
          <Box>
            <TableDados
              pesoKg={peso}
              alturaM={altura}
              species={pokemon?.species.url}
              type={type}
              baseExp={pokemon?.base_experience}
            />
          </Box> 
          <Box>
            <H3 className={type}>Abilities</H3>
            {pokemon?.abilities?.map((e, i) => (
              <HabilitiePokemon
                key={i}
                name={e?.ability.name}
                type={type}
              />
            ))}
          </Box>
        </ConteudoBox>
        <Hr />
        <Box>
          <H3 className={type}>Movements</H3>
          <Moves type={type} moves={pokemon?.moves} />
        </Box>
        <Link to="/">
          <Return className={type}>Return</Return>
        </Link>
      </Container>
    </Main>
  );
};
