import { GetData } from "../../components/pegarDados";
import PropTypes from 'prop-types';

export default function Home({ setPokemonData }) {
  return (
    <>
      <main className="container">
        <GetData setPokemonData={setPokemonData} />
      </main>
    </>
  )
}

Home.propTypes = {
  setPokemonData: PropTypes.any.isRequired 
};