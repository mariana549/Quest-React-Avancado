import styled from "styled-components";

export const Pesquisar = styled.input`
   background-color: #2e6db541;
   padding: 14px;
   color: white;
   border: solid 2px #2e6db5;
   border-radius: 10px 4px 4px 10px;
   width: 600px;

   &::placeholder {
      color: #ffff005a
   }

   &:hover {
      border: solid 2px #ffffff97;
   }

   @media (max-width: 768px) {
      width: 450px;
   }
   @media (max-width: 570px) {
      width: 310px;
   }

   @media (max-width: 375px) {
      width: 250px;
   }
`