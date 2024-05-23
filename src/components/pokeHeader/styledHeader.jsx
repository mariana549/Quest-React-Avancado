import styled from "styled-components"

export const Header = styled.nav`
   display: flex;
   align-items: center;
   background: #060321;
   height: 400px;
   padding: 15px;
   box-shadow: inset 5px 10px 10px #00000091;
   `

export const Div = styled.div`
   display: flex;
   flex-direction: column;
   gap: 60px;
   align-items: center;
   width: 100%;
`

export const Box = styled.div`
   display: flex;
   gap: 5px;
   align-items: center;
`

export const Logo = styled.img`
   width: 370px;
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
