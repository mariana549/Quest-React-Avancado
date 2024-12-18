import { useContext } from "react";
import Context from "../../../contexts/perfilContext/context";
import { ListMoves, Nomes } from "./styledMoves.js";

function Moves() {
   const { type, pokemon } = useContext(Context)
   return (
     <>
       <ListMoves className={type}>
         {pokemon?.moves
           .map((movimento) => movimento.move.name)
           .sort((a, b) => a.localeCompare(b))
           .map((nomeMovimento, i) => (
             <Nomes key={i}>{nomeMovimento}</Nomes>
           ))}
       </ListMoves>
     </>
   );
}

export default Moves
