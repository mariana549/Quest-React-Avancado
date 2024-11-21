import styled from "styled-components";
import {
  Color0,
  ColorCardBg,
  ColorTexts,
  ColorTypes,
} from "../../../utils/constants/constants";

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Imagem = styled.img`
  width: 550px;

  @media (max-width: 1550px) {
    width: 500px;
  }
  @media (max-width: 1200px) {
    width: 400px;
  }
  @media (max-width: 900px) {
    width: 350px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
  @media (max-width: 660px) {
    width: 270px;
  }
  @media (max-width: 620px) {
    width: 200px;
  }
  @media (max-width: 375px) {
    width: 150px;
  }
`;

export const Imagem2 = styled.img`
  ${Imagem}
  transform: translate(-20px);
  scale: 0.7;

  @media (max-width: 620px) {
    width: 90%;
    transform: translate(0);
    scale: 1;
    margin-left: 15px;
  }
  @media (max-width: 375px) {
    width: 70%;
    margin-left: 20px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PerfilTitulo = styled.h1`
  margin-top: 15px;
  font-size: 4rem;
  color: ${ColorTexts};
  font-weight: bold;
  text-transform: capitalize;

  @media (max-width: 900px) {
    font-size: 3.5rem;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 500px) {
    font-size: 2.65rem;
  }
`;

export const TypesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;

  @media (max-width: 900px) {
    width: 150px;
  }
`;

export const Tipo = styled.li`
  font-weight: 500;
  color: ${ColorCardBg};
  background-color: ${ColorTypes};
  font-size: 20px;
  padding: 8px;
  border-radius: 5px;
  text-transform: capitalize;

  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;

export const PokeId = styled.span`
  margin-top: 15px;
  font-size: 2rem;
  max-width: 100px;
  color: ${Color0};
  background: #ffffff5a;
  padding: 5px 7px;
  border-radius: 2px;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 1.75rem;
    padding: 4px 6px;
  }
  @media (max-width: 768px) {
    font-size: 1.45rem;
    padding: 3px 5px;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    padding: 2px 4px;
  }
`;