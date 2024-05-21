import styled from "styled-components"

export const Nav = styled.nav`
   display: flex;
   align-items: center;
   background-color: black;
   width: 100%;
   height: 160px;
   box-shadow: 0px 5px 8px #000000a3;
`

export const Logo = styled.img`
   width: 300px;
   transition: transform 0.3s ease; 
   
   &:hover {
      transform: translateY(-10px);
   }

   @media (max-width: 1200px) {
      width: 250px;
   }

   @media (max-width: 768px) {
      width: 200px;
   }

   @media (max-width: 500px) {
      display: none;
   }
`

export const IconLogo = styled.img`
   width: 130px;
   transition: transform 0.3s ease; 

   &:hover {
      transform: rotate(360deg)
   }

   @media (max-width: 1200px) {
      width: 100px;
   }

   @media (max-width: 768px) {
      width: 80px;
   }
`

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

export const SelectTypes = styled.select`
   background-color: #2e6db541;
   padding: 10px;
   color: #ffcb05;
   border: solid 2px #2e6db5;
   border-radius: 10px;
   margin-left: 5px;
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