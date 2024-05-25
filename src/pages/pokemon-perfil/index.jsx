import PropTypes from 'prop-types';
import { Pokemon } from '../../components/Pokemon';

export const Perfil = ({ pokemonData }) => {
  console.log(pokemonData, "perfil")
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