import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export const Pokemon = ({ pokemonData }) => {
  const [isImage, setIsImage] = useState(true);

  const imagens = {
    front: pokemonData.sprites.front_default,
    front_shiny: pokemonData.sprites.front_shiny,
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
    <>
      <Main className='container'>
        <Link to={"/"}><Voltar>Retornar</Voltar></Link>

        <PerfilTitulo>#{pokemonData.id} {pokemonData.name}</PerfilTitulo>

        <ImgContainer onMouserEnter={handleMouseEnter}>
          <Imagem src={isImage ? imagens.front : imagens.front_shiny} alt={pokemonData.name} />

          <ConteudoBox>
            <VersaoPokemon>{isImage ? "Normal" : "Shiny"}</VersaoPokemon>
            <TypesList>
              {pokemonData.types.map((type, i) => (
                <Tipo key={i}>{type.type.name}</Tipo>
              ))}
            </TypesList>
          </ConteudoBox>
        </ImgContainer>

        <Dados>
          <H3>Habilidades: </H3>
          <div>
            <List>
              {pokemonData.abilities.map((dados, i) => (
                <Li key={i}> {dados.ability.name} </Li>
              ))}
            </List>
          </div>
        </Dados>

        <Dados className='box'>
          <H3>Movimentos: </H3>
          <List>
            {pokemonData.moves.map((movimento, i) => (
              <Li key={i}>{movimento.move.name}</Li>
            ))}
          </List>
        </Dados>
      </Main>
    </>
  )
}

const Main = styled.main`
  display: grid;
  padding: 20px 0px;
  margin-top: 20px;
  border: solid 10px #FFCB05;
  border-radius: 25px;
  background-color: #010101c7;
`
const Voltar = styled.p`
  color: #ffcd05cf;
  font-size: 1.25rem;
  font-weight: bold;

  &:hover {
    /* background-color: #ffcd05cf; */
    color: white;
    text-shadow: 0px 0px 10px #ffcd05cf;
}
`
const ImgContainer = styled.div`
  text-align: center;
  width: 95%;
  border: solid 5px #ffcd05cf;
  border-radius: 0px 0px 35px 35px;
  background-color: #ededed;
`
const ConteudoBox = styled.div`
  display: flex;
  padding: 10px 0px;
  background-color: #ffcd05cf;
  border-radius: 0px 0px 25px 25px;
`

const PerfilTitulo = styled.h1`
  font-size: 3rem;
  color: #FFCB05;
  font-weight: bold;
  padding: 10px ;
`
const TypesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
`
const Tipo = styled.li`
  font-weight: 500;
  color: #fff;
  background-color: #191a1a47;
  font-size: 20px;
  padding: 5px;
  border: solid 2px #fff;
  border-radius: 5px;
  text-transform: capitalize;
  `
const VersaoPokemon = styled.p`
  color: #000;
  font-size: 1.25rem;
  font-weight: bold;
  align-self: center;
`
const Imagem = styled.img`
  width: 550px;

`

const Dados = styled.div`
  width: 100%;
  padding: 20px 40px;

`
const H3 = styled.h3`
  color: #ffcd05cf;
  font-size: 2rem;
  padding-bottom: 10px;
`
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-weight: 500;
  text-transform: capitalize;
`
const Li = styled.li`
  background-color: #ffffff;
  color: #2500a1;
  border-radius: 10px;
  padding: 6px;
  text-align: center;
  cursor: default;
`

Pokemon.propTypes = {
  pokemonData: PropTypes.any.isRequired
}