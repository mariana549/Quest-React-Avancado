import { ThemeContext } from "../contexts/themeContext"
import { Button } from "../Button"
import { useContext } from "react"

export const ThemeToggleButton = () => {
   const { theme, setTheme } = useContext(ThemeContext)
   console.log("toggleButton", theme)

   // const image = {
   //    sol: "public/assets/image/sol.png",
   //    lua: "public/assets/image/lua.png"
   // }

   return (
      <div>
         <Button onClick={() => setTheme(theme.dark ? theme.light : theme.dark)}>
             {theme ? "light" : "dark"}
         </Button>
      </div>
   )
}

// const Img = styled.img`
//    width: 50px;
//    height: 50px;
// `