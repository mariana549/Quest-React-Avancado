import { useContext, useEffect, useState } from "react";
import Context from "../../../contexts/pokeDados/context";
import { pokeSpecies } from "../../../services/requestApi";
import {
  Dado,
  Propriedade,
  Table,
  Tbody,
  TituloTabela,
  Tr,
} from "./styledTable";

function TableDados() {
  const { peso, altura, type, pokemon } = useContext(Context);
  const [specie, setSpecie] = useState({});
  const [shapePoke, setShapePoke] = useState({ name: " " });
  const [eggPoke, setEggPoke] = useState([{ name: " " }]);

  const { capture_rate, base_happiness } = specie;
  const eggs = eggPoke.map((egg) => egg.name);
  const egg = eggs.join(", ");

  useEffect(() => {
    const fetchDadosPoke = async () => {
      const speciesData = await pokeSpecies(pokemon?.species.url);

      setSpecie(speciesData);
      setShapePoke(speciesData.shape);
      setEggPoke(speciesData.egg_groups);
    };
    fetchDadosPoke();
  }, [pokemon]);

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
          <Dado>{altura}m</Dado>
        </Tr>
        <Tr>
          <Propriedade>Weight:</Propriedade>
          <Dado>{peso}kg</Dado>
        </Tr>
        <Tr>
          <Propriedade>Exp. base:</Propriedade>
          <Dado>{pokemon?.base_experience}</Dado>
        </Tr>

        <Tr>
          <Propriedade>Shape</Propriedade>
          <Dado>{shapePoke.name}</Dado>
        </Tr>
        <Tr>
          <Propriedade>Egg Groups</Propriedade>
          <Dado>{egg}</Dado>
        </Tr>
        <Tr>
          <Propriedade>Base Happiness</Propriedade>
          <Dado>{base_happiness}</Dado>
        </Tr>
        <Tr>
          <Propriedade>Capture Rate</Propriedade>
          <Dado>{capture_rate}</Dado>
        </Tr>
      </Tbody>
    </Table>
  );
}

export default TableDados;
