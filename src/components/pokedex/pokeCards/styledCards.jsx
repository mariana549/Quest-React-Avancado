import styled from "styled-components";

export const Item = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
width: 300px;
height: 150px;
background: #000000a9;
border: solid 2px #fff;
border-radius: 20px;
transition: transform 0.3s ease;

&:hover {
   transform: translateY(-5px);
   box-shadow: 0px 0px 10px white;
}
`;

export const PokemonImage = styled.img`
   width: 150px;
   height: 150px;
   margin: 0;
   transition: transform 0.5s ease;
`;

export const Box = styled.div`
   padding-left: 10px;
`

export const NomePokemon = styled.h2`
   font-size: 25px;
   color: #fff;
   text-transform: capitalize;
`;

export const TypesList = styled.ul`
   display: flex;
   padding-top: 10px;
`

export const Tipo = styled.li`
   color: #959594;
   font-weight: bold;
   font-size: 14px;
`