import styled from "styled-components"
import Colors from "../../../utils/colors"

export const Table = styled.table`
  width: 100%;
  padding: 10px;
  margin: 15px 0;
`

export const Tbody = styled.tbody`
  width: 100%;
  padding: 10px;
  margin: 10px;
`

export const Tr = styled.tr`
    width: 100%;
`
export const TituloTabela = styled.th`
  display: block;
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 10px;
  text-align: start;
  color: ${(props) => 
      props.theme.Theme.mainBg === "transparent" ?
       Colors.types[props.className.type.name] : 
       Colors.cardBg[props.className.type.name]};
`

export const Propriedade = styled.td`
  font-weight: bold;
  color: ${(props) => props.theme.Theme.color0};
`

export const Dado = styled.td`
  color: ${(props) => props.theme.Theme.color10};
  text-align: end;
  text-transform: capitalize;
`