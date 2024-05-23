import styled from "styled-components"

export const Nav = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;
   background: black;
   height: 150px;
`

export const Logo = styled.img`
   width: 300px;
   transition: transform 0.3s ease; 
   opacity: 200%;
   
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
