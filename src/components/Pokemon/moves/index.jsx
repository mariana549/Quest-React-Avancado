import { ListMoves, Nomes } from "./styledMoves"
import PropTypes from "prop-types"

function Moves({ type, moves }) {
   return (
      <>
         <ListMoves className={type}>
            {moves
               .map((movimento) => movimento.move.name)
               .sort((a, b) => a.localeCompare(b))
               .map((nomeMovimento, i) => (
                  <Nomes key={i}>
                     {nomeMovimento}
                  </Nomes>
               ))}
         </ListMoves>
      </>
   )
}

Moves.propTypes = {
   type: PropTypes.object.isRequired,
   moves: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Moves
