import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PokemonPerfil = ({ pokemonData }) => {
  console.log('PokemonPerfil', pokemonData)
  return (
    <>
      <main className='container'>
        <Link to={"/"}>Voltar home</Link>
        <h1>Perfil Pokemon</h1>
        <Imagem src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        <h2>{pokemonData.name}</h2>

        <h3>Movimentos</h3>
        <ul>
          {pokemonData.moves.map((movimento, i) => (
              <li key={i}>{movimento.move.name}</li>
          ))}
        </ul>

        <h3>Habilidades</h3>
        <ul>
          {pokemonData.abilities.map((dados, i) => (
            <li key={i}> {dados.ability.name} </li>
          ))}
        </ul>
      </main>
    </>
  )
}

PokemonPerfil.propTypes = {
  pokemonData: PropTypes.any.isRequired
}

const Imagem = styled.img`
  width: 500px;
  border: solid 5px black;
`