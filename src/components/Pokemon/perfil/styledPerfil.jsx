import styled from "styled-components"
import Colors from "../../../utils/colors"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  background: radial-gradient(circle at 50% -130%,
     ${(props) => 
      props.theme.Theme.mainBg === "transparent" ?
       Colors.cardBg[props.className.type.name] : 
       Colors.types[props.className.type.name]} 70%,
      ${(props) => props.theme.Theme.mainPerfilBg} 70.1%);

  @media (max-width: 1200px) {

}
`
export const Hr = styled.hr`
  border: 1px solid #ffffff65;
  margin: 10px;
`

export const Return = styled.p`
  color:  ${(props) => 
      props.theme.Theme.mainBg === "transparent" ?
       Colors.types[props.className.type.name] : 
       Colors.cardBg[props.className.type.name]};
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;

  &:hover {
    color: white;
    text-shadow: 0px 0px 10px ${(props) => Colors.cardBg[props.className.type.name]};
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

  @media (max-width: 1200px) {
      width: 400px;
   }

   @media (max-width: 768px) {
      width: 300px;
   }
`

export const ConteudoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 5px;
`

export const PerfilTitulo = styled.h1`
  margin-top: 15px;
  font-size: 4rem;
  color: ${(props) => 
      props.theme.Theme.mainBg === "transparent" ?
       Colors.types[props.className.type.name] : 
       Colors.cardBg[props.className.type.name]};
  font-weight: bold;
  text-transform: capitalize;

  @media (max-width: 768px){
    font-size: 1.65rem;
  }
`

export const PokeId = styled.span`
  margin-top: 15px;
  font-size: 2rem;
  max-width: 100px;
  color: ${(props) => props.theme.Theme.color0};
  background: #ffffff5a;
  padding: 5px 7px;
  border-radius: 2px;
  text-align: center;
`

export const TypesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
`

export const Tipo = styled.li`
  font-weight: 500;
  color: ${(props) => Colors.cardBg[props.children]};
  background-color: ${(props) => Colors.types[props.children]};
  font-size: 20px;
  padding: 8px;
  border-radius: 5px;
  text-transform: capitalize;

  @media (max-width: 768px){
    font-size: 1rem;
  }
  `

export const H3 = styled.h3`
  color: ${(props) => 
      props.theme.Theme.mainBg === "transparent" ?
       Colors.types[props.className.type.name] : 
       Colors.cardBg[props.className.type.name]};
  font-size: 2rem;
  padding-bottom: 10px;

  @media (max-width: 768px){
    font-size: 1.45rem;
  }
`