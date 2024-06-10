import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, ConteudoBox, Dado, Dados, H3, Hr, Imagem, ImgContainer, Li, List, Main, PerfilTitulo, PokeId, Test, Tipo, TypesList, VersaoPokemon, Voltar } from './styledPerfil';
import Container from '../container';
import TableDados from './tableDados';
import { HabilitiePokemon } from './abilities';
import Moves from './moves';

export const Pokemon = ({ pokemonData }) => {
  const pokemon = pokemonData;
  const type = pokemon.types[0]
  const pesoKg = pokemon.weight / 10
  const alturaM = pokemon.height / 10

  return (
    <Main className={type}>
      <Container>
        <ConteudoBox>
          <PerfilTitulo className={type}>{pokemon.name}</PerfilTitulo>
          <PokeId>#{pokemon.id} </PokeId>
        </ConteudoBox>
        <ImgContainer>
          <Imagem
            src={pokemon.sprites?.other?.["official-artwork"]?.front_default}
            alt={pokemon.name}
            style={{
              transform: "translateX(20px)",
            }}
          />
          <Imagem
            src={pokemon.sprites?.other?.["official-artwork"]?.front_shiny}
            alt={pokemon.name}
            style={{
              transform: "translateX(-20px)",
              scale: "0.7",
            }}
          />
        </ImgContainer>
        <ConteudoBox>
          <Box>
            <TableDados
              pesoKg={pesoKg}
              alturaM={alturaM}
              species={pokemon.species.url}
              type={type}
              baseExp={pokemon.base_experience}
            />
            <TypesList>
              {pokemon.types.map((type, i) => (
                <Tipo key={i}>{type.type.name}</Tipo>
              ))}
            </TypesList>
          </Box>
          <Box>
            <H3 className={type}>Abilities</H3>
            {pokemon.abilities.map((e, i) => (
              <HabilitiePokemon
                key={i}
                name={e.ability.name}
                url={e.ability.url}
                type={type}
              />
            ))}
          </Box>
        </ConteudoBox>
        <Hr />
          <Box>
          <H3 className={type}>Movimentos: </H3>
            <Moves
              type={ type }
              moves={ pokemon.moves }
            />
          </Box>
        <Link to={"/"}><Voltar className={type}>Home</Voltar></Link>
      </Container>
    </Main>
  )
}

Pokemon.propTypes = {
  pokemonData: PropTypes.object.isRequired
}