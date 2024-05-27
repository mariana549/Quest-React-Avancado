import styled from "styled-components"

export const Div = styled.div`
   background-image: repeating-linear-gradient(-45deg, #272161 -2px, #272161 2px, #00000010 3px, #00000010 6px);
`

export const Main = styled.main`
   padding-top: 2rem;
   width: 100%;
   background-color: #272161;
`

export const Lista = styled.ul`
   display: flex;
   flex-wrap: wrap;
   width: 100%;
   gap: 15px;
`

export const Carregando = styled.div`
   width: 300px;
   height: 150px;
   background: #00000079;
   border-radius: 20px;
   margin: 30px;
`

export const Box = styled.div`
   display: flex;
   flex-wrap: wrap;
   position: relative;
   animation: Sumir 1s infinite alternate ease-in-out;

  @keyframes Sumir {
      0% {
         opacity: 1;
      }
      100% {
         opacity: 0;
      }
   }
`