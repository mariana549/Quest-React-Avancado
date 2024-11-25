import styled from "styled-components";
import { Color20 } from "../constants/themeUtils";

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  animation: Sumir 1s infinite alternate ease-in-out;

  @keyframes Sumir {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const Carregando = styled.div`
  width: 350px;
  height: 200px;
  background: ${Color20};
  border-radius: 20px;
  margin: 30px;
`;
