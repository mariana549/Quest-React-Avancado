import styled from "styled-components";

export const Box = styled.div`
   display: flex;
   width: 100%;
   justify-content: end;
   position: relative;
` 

export const ButtonToggle = styled.button`
  border-radius: 40px;
  width: 45px;
  height: 45px;
  margin: 10px 50px 0 0;
  position: absolute;
  background-color: transparent;

  @media (max-width: 1200px){
      width: 35px;
      height: 35px;
      margin: 10px 35px 0 0;
   }
  @media (max-width: 765px){
      margin: 10px 20px 0 0;
   }
  @media (max-width: 600px){
      width: 30px;
      height: 30px;
      margin: 10px 10px 0 0;
   }
`;

export const Img = styled.img`
   width: 37px;
   transition: transform 0.5s ease;
   border-radius: 40px;
   margin-top: 2px;

   @media (max-width: 1200px){
      width: 30px;
      margin-top: 1.5px;
   }
   @media (max-width: 600px){
      width: 25px;
      margin-top: 1px;
   }
`;
