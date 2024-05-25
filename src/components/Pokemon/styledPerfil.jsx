import styled from "styled-components"

export const Main = styled.main`
  display: grid;
  padding: 20px 0px;
  background-color: #000000;

  @media (max-width: 1200px) {

}
`
export const Voltar = styled.p`
  color: #ffcd05cf;
  font-size: 1.25rem;
  font-weight: bold;

  &:hover {
    color: white;
    text-shadow: 0px 0px 10px #ffcd05cf;
}
`
export const ImgContainer = styled.div`
  text-align: center;
  width: 55%;
  height: 90%;
  border-radius: 50%;
  background-color: #d4fffa;
  border: 4px solid #ffcd05;
`

export const Imagem = styled.img`
  width: 550px;
  cursor: pointer;

  @media (max-width: 1200px) {
      width: 400px;
   }

   @media (max-width: 768px) {
      width: 300px;
   }
`

export const ConteudoBox = styled.div`
  display: flex;
  margin-top: 10px;
`

export const PerfilTitulo = styled.h1`
  font-size: 3rem;
  color: #FFCB05;
  font-weight: bold;
  padding: 10px ;

  @media (max-width: 768px){
    font-size: 1.65rem;
  }
`
export const TypesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
`
export const Tipo = styled.li`
  font-weight: 500;
  color: #fffffc;
  background-color: #191a1a47;
  font-size: 20px;
  padding: 5px;
  border: solid 2px #fff;
  border-radius: 5px;
  text-transform: capitalize;

  @media (max-width: 768px){
    font-size: 1rem;
  }
  `
export const VersaoPokemon = styled.p`
  color: #fffafa;
  font-size: 1.25rem;
  font-weight: bold;
  align-self: center;

  @media (max-width: 768px){
    font-size: 1rem;
  }
`

export const Dados = styled.div`
  width: 100%;
  padding: 20px 40px;

`
export const H3 = styled.h3`
  color: #ffcd05cf;
  font-size: 2rem;
  padding-bottom: 10px;

  @media (max-width: 768px){
    font-size: 1.45rem;
  }
`
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  font-weight: 500;
  text-transform: capitalize;
`
export const Li = styled.li`
  background-color: #e4e3e3;
  color: #2500a1;
  border-radius: 10px;
  padding: 6px;
  text-align: center;
  cursor: default;

  @media (max-width: 768px){
    font-size: 0.85rem;
  }
`