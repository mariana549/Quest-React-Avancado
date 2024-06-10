import styled from "styled-components"
import Themes from "../../contexts/colors"
// import Themes from "../../contexts/themes/themes"

export const Test = styled.p`
  color: white;
  font-size: 17px;
  font-weight: bold;
  padding: 5px;
  max-width: 400px;
`

export const Table = styled.table`
  /* border: 1px solid white; */
  width: 100%;
  padding: 10px;
  margin: 15px 0;
`
export const Thead = styled.thead`
  /* width: 90%; */
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
  color: ${(props) => Themes.types[props.className.type.name]};
`

export const Propriedade = styled.td`
  font-weight: bold;
  color:  white;
`

export const Dado = styled.td`
  color: #bdbdbd;
  text-align: end;
  text-transform: capitalize;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  background: radial-gradient(circle at 50% -90%, ${(props) => Themes.cardBg[props.className.type.name]} 70%, #edf1ffe8 70.1%);

  @media (max-width: 1200px) {

}
`
export const Hr = styled.hr`
  border: 1px solid #ffffff65;
  margin: 10px;
`

export const Voltar = styled.p`
  color:  ${(props) => Themes.cardBg[props.className.type.name]};
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;

  &:hover {
    color: white;
    text-shadow: 0px 0px 10px ${(props) => Themes.cardBg[props.className.type.name]};
}
`
export const ImgContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
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
      /* cursor: pointer; */

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
  color: ${(props) => Themes.types[props.className.type.name]};
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
  color: white;
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
  color: ${(props) => Themes.cardBg[props.children]};
  background-color: ${(props) => Themes.types[props.children]};
  font-size: 20px;
  padding: 8px;
  /* border: solid 2px ${(props) => Themes.cardBg[props.children]}; */
  border-radius: 5px;
  text-transform: capitalize;

  @media (max-width: 768px){
    font-size: 1rem;
  }
  `
export const VersaoPokemon = styled.p`
  color: #126d79;
  font-size: 1.25rem;
  font-weight: bold;
  align-self: center;
  padding: 10px;

  @media (max-width: 768px){
    font-size: 1rem;
  }
`

export const Dados = styled.div`
  width: 100%;
  padding: 20px 40px;

`
export const H3 = styled.h3`
  color: ${(props) => Themes.types[props.className.type.name]};
  font-size: 2rem;
  padding-bottom: 10px;

  @media (max-width: 768px){
    font-size: 1.45rem;
  }
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  width: 100%;
  font-weight: 500;
  text-transform: capitalize;
`
export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #b4aec7;
  border-radius: 10px;
  padding: 6px;
  text-align: center;
  cursor: default;

  @media (max-width: 768px){
    font-size: 0.85rem;
  }
`