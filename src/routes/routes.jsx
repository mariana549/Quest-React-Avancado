import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import { Perfil } from "../pages/pokemon-perfil"
import { useState } from "react"

function AppRoutes () {
   const [pokemonData, setPokemonData] = useState()
   console.log(pokemonData, "appRoutes")
   return (
      <Routes>
         <Route path="/" element={<Home setPokemonData={setPokemonData} />} />
         <Route path="Perfil/:id" element={<Perfil pokemonData={pokemonData} />} />
      </Routes>
   )
}

export { AppRoutes } 