import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

export const Pokemon = ({ pokemonData }) => {
  const [isImage, setIsImage] = useState(true);

  const imagens = {
    front: pokemonData.sprites.front_default,
    back: pokemonData.sprites.back_default,
    front_shiny: pokemonData.sprites.front_shiny,
    back_shiny: pokemonData.sprites.back_shiny
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

        <ImgContainer onMouserEnter={handleMouseEnter}>
          <ConteudoBox>
            <PerfilTitulo>#{pokemonData.id} {pokemonData.name}</PerfilTitulo>

            <TypesList>
              {pokemonData.types.map((type , i) => (
                <Tipo key={i}>{type.type.name}</Tipo>
              ))}
            </TypesList>

            <VersaoPokemon>{isImage ? "Normal" : "Shiny"}</VersaoPokemon>
          </ConteudoBox>

          <Imagem src={isImage ? imagens.front : imagens.front_shiny} alt={pokemonData.name} />
        </ImgContainer>

        <Habilidades>
          <H3>Habilidades</H3>
          <List>
            {pokemonData.abilities.map((dados, i) => (
              <Li key={i}> {dados.ability.name} </Li>
            ))}
          </List>
        </Habilidades>

        <Movimentos className='box'>
          <H3 className='box'>Movimentos</H3>
          <List>
            {pokemonData.moves.map((movimento, i) => (
                <Li key={i}>{movimento.move.name}</Li>
            ))}
          </List>
          <Link to={"/"}><Voltar>Voltar home</Voltar></Link>
        </Movimentos>
      </Main>
    </>
  )
}

const Main = styled.main`
  background-color: #17171384;
  display: grid;
  grid-template-areas: 
  "ImgContainer habilidades"
  "movimentos movimentos";
  border: 3px solid #00000058;
  border-radius: 0px 0px 25px 25px;
  box-shadow: 0px 3px 5px #080e0692;
`

const ImgContainer = styled.div`
  grid-area: ImgContainer;
  display: flex;
  align-items: center;
  background-color: #59b43ba6;
  border-radius: 0px 40px;
  box-shadow: 0px 3px 5px #080e0692;
`

const ConteudoBox = styled.div`
    padding-bottom: 10px;
`

const PerfilTitulo = styled.h1`
  color: #183211;
  font-weight: 900;
  font-size: 50px;
  text-align: center;
  padding-left: 35px;
  padding-bottom: 7px;
  text-transform: capitalize;
`

const TypesList = styled.ul`
  width: 200px;
  display: flex;
`

const Tipo = styled.li`
  font-weight: 500;
  color: #fff;
  background-color: #162d0f4a;
  font-size: 20px;
  padding: 5px;
  border: solid 2px #1a510792;
  border-radius: 5px;
  text-transform: capitalize;
  `

  const VersaoPokemon = styled.p`
    text-align: center;
    padding: 15px 0px;
    color: #fff;
    font-weight: 500;
  `

  const Imagem = styled.img`
    width: 450px;
  `

const Habilidades = styled.div`
  grid-area: habilidades;
  align-self: center;
  width: 350px;
`

const Movimentos = styled.div`
  grid-area: movimentos;
`

const H3 = styled.h3`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  padding-bottom: 15px;
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-weight: 500;
  color: #3cbe9ef5;
  text-transform: capitalize;
`

const Li = styled.li`
  width: 130px;
  padding: 5px;
  text-align: center;
  font-weight: 500;
`

const Voltar = styled.p`
  color: #1acca0f5;
  font-size: 17px;
  font-weight: 900;
  margin-top: 10px;
  text-align: left;
  padding-top: 30px;
`
  
Pokemon.propTypes = {
   pokemonData: PropTypes.any.isRequired
}