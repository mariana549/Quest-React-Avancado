import styled from "styled-components";
import Themes from "../../../utils/colors";

export const Div = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0;
   width: 50%;
   height: 100%;
   background: ${(props) => props.theme.Theme.cardDiv};
   box-shadow: inset 3px 1px 3px #00000081;
   border-radius: 50% 15px 15px 50% ;
` 

export const PokeCards = styled.div`
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   gap: 20px;
`

export const Id = styled.span`
   font-size: 25px;
   color: white;
   font-weight: bold;
`

export const Item = styled.li`
   display: flex;
   align-items: center;
   width: 400px;
   height: 250px;
   background:  ${(props) => Themes.cardBg[props.children[0].props.children[2].props.children[0].props.children]};
   border-radius: 20px;
   transition: transform 0.3s ease;
   box-shadow: 0px 0px 3px #000000c4;

   &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 5px 4px #0000007a;
      cursor: grab;
   }
`;

export const PokemonImage = styled.img`
   width: 160px;
   height: 160px;
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
   color: ${(props) =>  Themes.types[props.children]};
   font-weight: bold;
   font-size: 18px;
`