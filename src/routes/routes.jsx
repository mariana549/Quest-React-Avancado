import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import { Perfil } from "../pages/pokemon-perfil"
import { useState } from "react"
import Themes from "../contexts/themes/themes"
import { ThemeProvider } from "styled-components"

function AppRoutes () {
   const [pokemonData, setPokemonData] = useState()

   return (
      <ThemeProvider theme={Themes}>
         <Routes>
            <Route path="/" element={<Home setPokemonData={setPokemonData} />} />
            <Route path="Perfil/:id" element={<Perfil pokemonData={pokemonData} />} />
         </Routes>
      </ThemeProvider>
   )
}

export { AppRoutes } 