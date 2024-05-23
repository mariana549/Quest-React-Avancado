import styled from "styled-components"

export const Nav = styled.nav`
   display: flex;
   align-items: center;
   background: black;
   width: 100%;
   height: 150px;
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
