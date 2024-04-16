import { useContext } from "react"
import styled from "styled-components";
import { ThemeContext, ThemeProvider } from "../contexts/themeContext";

const Button = (props) => {
   const { theme } = useContext(ThemeContext)

   return (
      <ThemeProvider theme={theme} >
         {console.log("b", theme)}
            <Botao {...props} />
       </ThemeProvider>
   )
}

const Botao = styled.button`
   padding: 10px;
   font-weight: bold;
   border-radius: 5px;
   background-color: ${(props) => console.log(props.theme)};
   border: solid 1px black;
   margin-top: 50px;
`
export { Button } 
// const Botao = styled.button`
//    color: theme.color;
//    background: theme.background;
// ` 