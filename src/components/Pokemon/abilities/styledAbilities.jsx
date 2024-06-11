import styled from "styled-components"

export const Li = styled.li`
  width: 100%;
  color: #b7b6b6;
  padding: 6px;
  cursor: default;

  @media (max-width: 768px){
    font-size: 0.85rem;
  }
`

export const Name = styled.span`
   text-transform: capitalize;
   font-weight: bold;
   color: white;
   font-size: 1.2rem;
   letter-spacing: 1px;
`

export const DescriptionAbilities = styled.p`
  display: inline-block;
`