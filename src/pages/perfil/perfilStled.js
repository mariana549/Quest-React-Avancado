import styled from "styled-components";
import {
  BackgroundColorRadial,
  ColorTexts,
  MainPerfilBg,
  Shadow,
} from "../../utils/constants/constants";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  background: radial-gradient(
    circle at 50% -130%,
    ${BackgroundColorRadial} 70%,
    ${MainPerfilBg} 70.1%
  );
  @media (max-width: 900px) {
    padding: 20px;
  }
  @media (max-width: 780px) {
    background: radial-gradient(
      circle at 50% -165%,
      ${BackgroundColorRadial} 70%,
      ${MainPerfilBg} 70.1%
    );
  }
  @media (max-width: 620px) {
    background: radial-gradient(
      circle at 50% -178%,
      ${BackgroundColorRadial} 70%,
      ${MainPerfilBg} 70.1%
    );
  }
`;

export const DivLoading = styled.div`
  height: 100%;
  padding: 20px;
`;

export const Loading = styled.p`
  color: #fff;
  text-align: center;
  font-size: 30px;
`;

export const ArrowReturn = styled.img`
  position: absolute;
  top: 20px;
  left: 50px;

  &:hover {
    transform: translateX(-5px);
  }

  @media (max-width: 765px){
    top: 10px;
    left: 30px;
  }

  @media (max-width: 620px){
    left: 20px;
  }

  @media (max-width: 370px){
    top: 5px;
    left: 10px;
  }
`;

export const Return = styled.p`
  color: ${ColorTexts};
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;

  &:hover {
    color: white;
    text-shadow: 0px 0px 10px ${Shadow};
  }
`;