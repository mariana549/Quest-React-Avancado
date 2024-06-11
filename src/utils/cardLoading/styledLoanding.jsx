import styled from "styled-components";

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

export const Carregando = styled.div`
   width: 350px;
   height: 200px;
   background: ${(props) => props.theme.Theme.color20};
   border-radius: 20px;
   margin: 30px;
`