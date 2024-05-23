import styled from "styled-components";

export const Div = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0;
   width: 50%;
   height: 100%;
   background-color: white;
   border-radius: 50% 15px 15px 50% ;
` 

export const Id = styled.span`
   font-size: 27px;
   color: white;
   font-weight: bold;
`

export const Item = styled.li`
   display: flex;
   align-items: center;
   width: 350px;
   height: 200px;
   background: #000000d3 ;
   border: solid 2px #fff;
   border-radius: 20px;
   transition: transform 0.3s ease;

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 0px 10px white;
   }
`;

export const PokemonImage = styled.img`
   width: 140px;
   height: 140px;
   padding: 5px;
   transition: transform 0.5s ease;
`;

export const Box = styled.div`
   padding-left: 10px;
   display: flex;
   flex-direction: column;
   gap: 7px;
`

export const NomePokemon = styled.h2`
   font-size: 25px;
   color: #fff;
   text-transform: capitalize;
`;

export const TypesList = styled.ul`
   display: flex;
   gap: 5px;
`

export const Tipo = styled.li`
   color: #959594;
   font-weight: bold;
   font-size: 14px;
`