import { Route, Routes } from "react-router-dom"
import Home from "./home"
import { Perfil } from "./profile"
import { useState } from "react"

function AppRoutes () {
   const [pokemonData, setPokemonData] = useState()
   return (
      <Routes>
         <Route path="/" element={<Home setPokemonData={setPokemonData} />} />
         <Route path="Perfil/:id" element={<Perfil pokemonData={pokemonData} />} />
      </Routes>
   )
}

export { AppRoutes } 