import PropTypes from 'prop-types';
import { Pokemon } from '../../components/Pokemon';
import { NavBar } from '../../components/navBar';

export const Perfil = ({ pokemonData }) => {
  return (
    <>
      <NavBar />
      <Pokemon pokemonData={pokemonData}/>
    </>
  )
} 

Perfil.defaultProps = {
  pokemonData: {} 
};

Perfil.propTypes = {
  pokemonData: PropTypes.any.isRequired
}