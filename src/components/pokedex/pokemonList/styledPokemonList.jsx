import styled from "styled-components"

export const Main = styled.main`
   padding: 2rem;
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