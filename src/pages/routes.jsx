import { Route, Routes } from "react-router-dom"
import Home from "./home"
// import { PokemonData } from "./pokemonData"


const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         {/* <Route path="pokemon/:id" element={<PokemonData/>} /> */}
      </Routes>
   )
}

export { AppRoutes } 