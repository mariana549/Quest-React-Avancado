import { useContext } from "react"
import styled from "styled-components";
import { ThemeContext } from "../contexts/themeContext";

export const Button = (props) => {
   const { theme } = useContext(ThemeContext)

   return (
      <Botao {...props} />
   )
}

const Botao = styled.button`
   padding: 10px;
   font-weight: bold;
   border-radius: 5px;
   background-color: {theme.ligth.bodyBg};
   border: solid 1px black;
   margin-top: 50px;
`

// const Botao = styled.button`
//    color: theme.color;
//    background: theme.background;
// ` 