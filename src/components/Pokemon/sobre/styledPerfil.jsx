import styled from "styled-components"
import { ColorTexts } from "../../../utils/constants/constants"

export const Hr = styled.hr`
  border: 1px solid #ffffff8b;
  margin: 10px;

  @media (max-width: 768px){
    border: transparent;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ConteudoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 5px;

  @media (max-width: 768px){
    flex-direction: column;
}
`

export const H3 = styled.h3`
  color: ${ColorTexts};
  font-size: 2rem;
  padding-bottom: 10px;

  @media (max-width: 900px){
    font-size: 1.75rem;
  }
  @media (max-width: 768px){
    font-size: 1.45rem;
  }
`