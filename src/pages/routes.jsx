import { Route, Routes } from "react-router-dom"
import Home from "./home"
import { PokemonPerfil } from "./pokemonPerfil"
import { useState } from "react"

function AppRoutes () {
   const [pokemonData, setPokemonData] = useState()
   return (
      <Routes>
         <Route path="/" element={<Home setPokemonData={setPokemonData} />} />
         <Route path="pokemon/:id" element={<PokemonPerfil pokemonData={pokemonData} />} />
      </Routes>
   )
}

export { AppRoutes } 