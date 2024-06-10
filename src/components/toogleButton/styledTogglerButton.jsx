import styled from "styled-components";

export const Box = styled.div`
   display: flex;
   width: 100%;
   justify-content: end;
   position: relative;
` 

export const ButtonToggle = styled.button`
  background-color: transparent;
  border-radius: 40px;
  border: 1px solid white;
  width: 45px;
  height: 45px;
  margin: 10px 50px 0 0;
  position: absolute;
`;

export const Img = styled.img`
   width: 37px;
   transition: transform 0.5s ease;
   background: white;
   border-radius: 40px;
   margin-top: 2px;
`;
