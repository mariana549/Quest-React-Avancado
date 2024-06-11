import { useEffect, useState } from "react"
import { pokeSpecies } from "../../../services/requestApi"
import PropTypes from "prop-types"
import { Dado, Propriedade, Table, Tbody, TituloTabela, Tr } from "./styledTable"

function TableDados({ pesoKg, alturaM, species, type, baseExp }) {
   const [specie, setSpecie] = useState({})
  
  const { shape, egg_groups, capture_rate, base_happiness } = specie

//   se ativada as propriedades abaixo buga o perfil do pokemon
//   const eggs = egg_groups.map((egg) => egg.name)
//   const egg = eggs.join(", ")
  
  
  useEffect(() => {
     const fetchDadosPoke = async () => {
        const speciesData = await pokeSpecies(species)
  
        setSpecie((prevState) => prevState ? prevState : speciesData)
     }
     fetchDadosPoke()
  }, [])

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

            {/*  propriedades que bugam quando inicia o pokemon
            <Tr>
               <Propriedade>Forma</Propriedade>
               <Dado>{shape.name}</Dado>
            </Tr>
            <Tr>
               <Propriedade>Grupo de ovos</Propriedade>
               <Dado>{eggs !== undefined ? egg : "Dados indisponível"}</Dado>
            </Tr>
            <Tr>
               <Propriedade>Amizade Básica</Propriedade>
               <Dado>{base_happiness}</Dado>
            </Tr>
            <Tr>
               <Propriedade>Taxa de captura</Propriedade>
               <Dado>{capture_rate}</Dado>
            </Tr> */}
         </Tbody>
      </Table>
   )
}

TableDados.propTypes = {
   pesoKg: PropTypes.number.isRequired,
   alturaM: PropTypes.number.isRequired,
   baseExp: PropTypes.number.isRequired,
   species: PropTypes.string.isRequired,
   type: PropTypes.object.isRequired,
}

export default TableDados
