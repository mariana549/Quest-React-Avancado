import styled from "styled-components"

export const SelectTypes = styled.select`
   background-color: #2e6db541;
   padding: 10px;
   color: #ffcb05;
   border: solid 2px #2e6db5;
   border-radius: 10px;
   cursor: pointer;

   @media (max-width: 1200px) {
   width: 50px;
   }

   @media (max-width: 768px) {
      width: 20px;
   }
`

export const Option = styled.option`
   background-color: #000000;
   cursor: pointer;
`