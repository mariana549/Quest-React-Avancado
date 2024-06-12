import styled from "styled-components"
import { Color0, Color10, ColorTexts } from "../../../utils/constants/constants"

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
  color: ${ColorTexts};

  @media (max-width: 900px){
      font-size: 1.75rem;
    }
  @media (max-width: 768px){
    font-size: 1.45rem;
  }
`

export const Propriedade = styled.td`
  font-weight: bold;
  color: ${Color0};
`

export const Dado = styled.td`
  color: ${Color10};
  text-align: end;
  text-transform: capitalize;
`