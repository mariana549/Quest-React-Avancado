import styled from "styled-components";
import { Color10 } from "../../../utils/constants/themeUtils";

export const ListMoves = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  padding: 15px 0px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 630px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Nomes = styled.li`
  width: 100%;
  color: ${Color10};
  font-size: 18px;
  text-transform: capitalize;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;
