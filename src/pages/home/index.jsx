import PropTypes from 'prop-types';
import { GetData } from '../../components/pegarDados';

export default function Home({setPokemonData}) {
  return (
    <>
      <GetData setPokemonData={setPokemonData} />
    </>
  )
}

Home.propTypes = {
  setPokemonData: PropTypes.any.isRequired
};