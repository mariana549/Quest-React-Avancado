import styled from "styled-components"
import { Color0, ColorCardBg, ColorTexts, ColorTypes, backgroundColorRadial, mainPerfilBg, shadow } from "../../../utils/constants/constants"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
   background: radial-gradient(circle at 50% -130%,
     ${backgroundColorRadial} 70%,
     ${mainPerfilBg} 70.1%);
  @media (max-width: 900px) {
    padding: 20px;
  }
  @media (max-width: 780px) {
    background: radial-gradient(circle at 50% -165%,
      ${backgroundColorRadial} 70%,
      ${mainPerfilBg} 70.1%);;
  }
  @media (max-width: 620px) {
    background: radial-gradient(circle at 50% -178%,
      ${backgroundColorRadial} 70%,
      ${mainPerfilBg} 70.1%);;
  }
`
export const Hr = styled.hr`
  border: 1px solid #ffffff8b;
  margin: 10px;

  @media (max-width: 768px){
    border: transparent;
  }
`

export const Return = styled.p`
  color: ${ColorTexts};
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;

  &:hover {
    color: white;
    text-shadow: 0px 0px 10px ${shadow};
}
`
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

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
`

export const Imagem2 = styled.img`
  width: 550px;
  transform: translate(-20px);
  scale: 0.7;

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
    width: 90%;
    transform: translate(0);
    scale: 1;
    margin-left: 15px;
 }
 @media (max-width: 375px) {
    width: 70%;
    margin-left: 20px;
 }
`

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
export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PerfilTitulo = styled.h1`
  margin-top: 15px;
  font-size: 4rem;
  color: ${ColorTexts};
  font-weight: bold;
  text-transform: capitalize;

  @media (max-width: 900px){
    font-size: 3.5rem;
  }
  @media (max-width: 768px){
    font-size: 3rem;
  }
  @media (max-width: 500px){
    font-size: 2.65rem;
  }
`

export const PokeId = styled.span`
  margin-top: 15px;
  font-size: 2rem;
  max-width: 100px;
  color: ${Color0};
  background: #ffffff5a;
  padding: 5px 7px;
  border-radius: 2px;
  text-align: center;

  @media (max-width: 900px){
    font-size: 1.75rem;
    padding: 4px 6px;
  }
  @media (max-width: 768px){
    font-size: 1.45rem;
    padding: 3px 5px;
  }
  @media (max-width: 500px){
    font-size: 1rem;
    padding: 2px 4px;
  }
`

export const TypesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;

  @media (max-width: 900px){
    width: 150px;
  }
`

export const Tipo = styled.li`
  font-weight: 500;
  color: ${ColorCardBg};
  background-color: ${ColorTypes};
  font-size: 20px;
  padding: 8px;
  border-radius: 5px;
  text-transform: capitalize;

  @media (max-width: 900px){
    font-size: 1rem;
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