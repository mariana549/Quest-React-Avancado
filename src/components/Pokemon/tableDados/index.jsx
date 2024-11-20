import { useEffect, useState } from "react";
import { pokeSpecies } from "../../../services/requestApi";
import PropTypes from "prop-types";
import {
  Dado,
  Propriedade,
  Table,
  Tbody,
  TituloTabela,
  Tr,
} from "./styledTable";

function TableDados({ pesoKg, alturaM, species, type, baseExp }) {
  const [specie, setSpecie] = useState({});
  const [shapePoke, setShapePoke] = useState({ name: " " });
  const [eggPoke, setEggPoke] = useState([{ name: " " }]);

  const { capture_rate, base_happiness } = specie;

  const eggs = eggPoke.map((egg) => egg.name);
  const egg = eggs.join(", ");

  useEffect(() => {
    const fetchDadosPoke = async () => {
      const speciesData = await pokeSpecies(species);

      setSpecie(speciesData);
      setShapePoke(speciesData.shape);
      setEggPoke(speciesData.egg_groups);
    };
    fetchDadosPoke();
  }, [species]);

  return (
    <Table>
      <thead>
        <Tr>
          <TituloTabela className={type}>Pokemon Data</TituloTabela>
        </Tr>
      </thead>
      <Tbody>
        <Tr>
          <Propriedade>Height:</Propriedade>
          <Dado>{alturaM}m</Dado>
        </Tr>
        <Tr>
          <Propriedade>Weight:</Propriedade>
          <Dado>{pesoKg}kg</Dado>
        </Tr>
        <Tr>
          <Propriedade>Exp. base:</Propriedade>
          <Dado>{baseExp}</Dado>
        </Tr>

        <Tr>
          <Propriedade>Forma</Propriedade>
          <Dado>
            {shapePoke.name}
          </Dado>
        </Tr>
        <Tr>
          <Propriedade>Grupo de ovos</Propriedade>
          <Dado>{egg}</Dado>
        </Tr>
        <Tr>
          <Propriedade>Amizade Básica</Propriedade>
          <Dado>{base_happiness}</Dado>
        </Tr>
        <Tr>
          <Propriedade>Taxa de captura</Propriedade>
          <Dado>{capture_rate}</Dado>
        </Tr>
      </Tbody>
    </Table>
  );
}

TableDados.propTypes = {
  pesoKg: PropTypes.number.isRequired,
  alturaM: PropTypes.number.isRequired,
  baseExp: PropTypes.number.isRequired,
  species: PropTypes.string.isRequired,
  type: PropTypes.object.isRequired,
};

export default TableDados;
