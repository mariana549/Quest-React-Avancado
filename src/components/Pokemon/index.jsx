import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { HabilitiePokemon } from './habilities';
import { ConteudoBox, Dados, H3, Imagem, ImgContainer, Li, List, Main, PerfilTitulo, Tipo, TypesList, VersaoPokemon, Voltar } from './styledPerfil';
import Container from '../container';

export const Pokemon = ({ pokemonData }) => {
  console.log(pokemonData, "pokemon")



  const [isImage, setIsImage] = useState(true);
  // const [ability, setAbility] = useState();

  const imagens = {
    front: pokemonData.sprites.other.dream_world.front_default,
    front_shiny: pokemonData.sprites.other.home.front_shiny,
  }



  const handleMouseEnter = () => {
    setIsImage(!isImage);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImage(!isImage);
    }, 8000);
    return () => clearTimeout(timer);
  }, [isImage]);

  return (
    <Container>
      <Main>
        <Link to={"/"}><Voltar>Retornar</Voltar></Link>

        <PerfilTitulo>#{pokemonData.id} {pokemonData.name}</PerfilTitulo>

        <ImgContainer onClick={handleMouseEnter}>
          {/* <Imagem src={isImage ? imagens.front : imagens.front_shiny} alt={pokemonData.name} /> */}
          <Imagem src={pokemonData.sprites?.other?.["official-artwork"]?.front_default} alt={pokemonData.name} />

          <ConteudoBox>
            <VersaoPokemon>{isImage ? "Normal" : "Shiny"}</VersaoPokemon>
            <TypesList>
              {pokemonData.types.map((type, i) => (
                <Tipo key={i}>{type.type.name}</Tipo>
              ))}
            </TypesList>
          </ConteudoBox>
        </ImgContainer>

        {/* <Dados>
          <H3>Habilidades: </H3>
          <div>
            <List>
              {pokemonData.abilities.map((dados, i) => (
                <HabilitiePokemon key={i} url={dados.ability.url} name={dados.ability.name} />
              ))}
            </List>
          </div>
        </Dados> */}

        <Dados>
          <H3>Movimentos: </H3>
          <List>
            {pokemonData.moves
              .map((movimento) => movimento.move.name)
              .sort((a, b) => a.localeCompare(b))
              .map((nomeMovimento, i) => (
                <Li key={i}>{nomeMovimento}</Li>
              ))}
          </List>
        </Dados>
      </Main>
    </Container>
  )
}

Pokemon.propTypes = {
  pokemonData: PropTypes.any.isRequired
}