import styled from "styled-components"

export const Header = styled.nav`
   display: flex;
   align-items: center;
   height: 50vh;
   padding: 25px;
   width: 100%;
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
      width: 330px;
   }

   @media (max-width: 768px) {
      width: 270px;
   }

   @media (max-width: 375px) {
      width: 220px;
   }
`

export const BoxsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`