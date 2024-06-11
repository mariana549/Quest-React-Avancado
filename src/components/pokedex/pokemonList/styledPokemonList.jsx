import styled from "styled-components"

export const Main = styled.main`
   padding-top: 2rem;
   width: 100%;
   background: ${(props) => props.theme.Theme.mainBg};
`

export const Lista = styled.ul`
   display: flex;
   flex-wrap: wrap;
   width: 100%;
   gap: 15px;
`

