import styled from "styled-components";

export const Pesquisar = styled.input`
   background-color: #2e6db541;
   padding: 10px;
   color: white;
   border: solid 2px #2e6db5;
   border-radius: 10px;

   &:hover {
      box-shadow: 1px 1px 10px #FFCB05;
   }

   @media (max-width: 1200px) {
   width: 140px;
   }

   @media (max-width: 768px) {
      width: 110px;
   }
`