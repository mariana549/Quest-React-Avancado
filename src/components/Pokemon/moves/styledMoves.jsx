import styled from "styled-components"

export const ListMoves = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  padding: 15px 0px;
  `

export const Nomes = styled.li`
   width: 100%;
   color: ${(props) => props.theme.Theme.color10};
   font-size: 18px;
   text-transform: capitalize;
`