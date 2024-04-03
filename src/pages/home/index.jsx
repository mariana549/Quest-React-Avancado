import { NavBar } from "../../components/navBar";
import { GetData } from "../../components/pegarDados";
import PropTypes from 'prop-types';

export default function Home({ setPokemonData }) {
  return (
    <>
      <NavBar />
      <main className="container">
        <GetData setPokemonData={setPokemonData} />
      </main>
    </>
  )
}

Home.propTypes = {
  setPokemonData: PropTypes.any.isRequired 
};