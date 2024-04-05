import { GetData } from "../../components/pegarDados";
import PropTypes from 'prop-types';

export default function Home({ setPokemonData }) {
  return (
    <>
      <GetData setPokemonData={setPokemonData} />
    </>
  )
}

Home.propTypes = {
  setPokemonData: PropTypes.any.isRequired
};