import { useEffect, useState } from "react"
import { Dado, Propriedade, Table, Tbody, Thead, TituloTabela, Tr } from "../styledPerfil"
import { pokeSpecies } from "../../../services/requestApi"

function TableDados({ pesoKg, alturaM, species, type, baseExp }) {
   const [specie, setSpecie] = useState({})
  
  const { shape, egg_groups, capture_rate, base_happiness } = specie
  
//   const eggs = egg_groups.map((egg) => egg.name)
//   const egg = eggs.join(", ")
  
  
  useEffect(() => {
     const fetchDadosPoke = async () => {
        const speciesData = await pokeSpecies(species)
  
        setSpecie(speciesData)
     }
     fetchDadosPoke()
  }, [])

   return (
      <Table>
         <Thead>
            <Tr>
               <TituloTabela className={type}>Dados do Pokemon</TituloTabela>
            </Tr>
         </Thead>
         <Tbody>
            <Tr>
               <Propriedade>Altura:</Propriedade>
               <Dado>{alturaM}m</Dado>
            </Tr>
            <Tr>
               <Propriedade>Peso:</Propriedade>
               <Dado>{pesoKg}kg</Dado>
            </Tr>
            {/* <Tr>
               <Propriedade>Forma</Propriedade>
               <Dado>{shape.name}</Dado>
            </Tr>
            <Tr>
               <Propriedade>Grupo de ovos</Propriedade>
               <Dado>{eggs !== undefined ? egg : "Dados indisponível"}</Dado>
            </Tr>
            <Tr>
               <Propriedade>Exp. base:</Propriedade>
               <Dado>{baseExp}</Dado>
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

export default TableDados
