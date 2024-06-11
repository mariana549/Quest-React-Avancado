import PropTypes from 'prop-types';
import { Pokemon } from '../../components/Pokemon/perfil';

export const Perfil = ({ pokemonData }) => {

  return (
    <>
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