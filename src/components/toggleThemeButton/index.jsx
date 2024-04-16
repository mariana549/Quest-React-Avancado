import { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"
import { Button } from "../Button"

export const ThemeToggleButton = () => {
   const { theme, setTheme } = useContext(ThemeContext)
   return (
      <div>
         <Button onClick={() => setTheme(theme === theme.light ? theme.dark : theme.light)}>
            Tema {theme === theme.light ? "light" : "Dark"} 
         </Button>
      </div>
   )
}