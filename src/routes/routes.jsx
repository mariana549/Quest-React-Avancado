import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import { Perfil } from "../pages/pokemon-perfil"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import TogglerButton from "../utils/toogleButton"
import { Themes } from "../utils/themes"
import Colors from "../utils/colors"

function AppRoutes() {
   const [pokemonData, setPokemonData] = useState({})
   const [theme, setTheme] = useState("light")

   function togglerButton() {
      setTheme((prevState) => prevState === 'light' ? "dark" : "light")
   }

   return (
      <ThemeProvider theme={{ Theme: Themes[theme], colors: Colors }}>
         <TogglerButton togglerButton={togglerButton} theme={theme} />
         <Routes>
            <Route path="/" element={<Home setPokemonData={setPokemonData}/>} />
            <Route path="Perfil/:id" element={<Perfil pokemonData={pokemonData} />} />
         </Routes>
      </ThemeProvider>
   )
}

export { AppRoutes }  