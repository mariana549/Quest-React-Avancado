import styled from "styled-components";
import { MainBg } from "../../../utils/constants/themeUtils";

export const Main = styled.main`
  padding-top: 2rem;
  width: 100%;
  min-height: 455px;
  background: ${MainBg};
`;

export const Lista = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 15px;
`;

export const Error = styled.p`
  color: #b00c00; // trocar a cor de acordo com o tema
  font-size: 1.5rem;
  font-weight: bold;
  height: 46vh;
`;
