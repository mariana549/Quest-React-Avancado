import { useContext } from "react";
import Context from "../../../contexts/pokeDados/context";
import { HabilitiePokemon } from "../abilities";
import Moves from "../moves";
import TableDados from "../tableDados";
import { Box, ConteudoBox, H3, Hr } from "./styledPerfil";

export const PokemonSobre = () => {
  const { pokemon, type } = useContext(Context);

  return (
    <>
      <ConteudoBox>
        <Box>
          <TableDados />
        </Box>
        <Box>
          <H3 className={type}>Abilities</H3>
          {pokemon?.abilities?.map((e, i) => (
            <HabilitiePokemon key={i} name={e?.ability.name} />
          ))}
        </Box>
      </ConteudoBox>
      <Hr />
      <Box>
        <H3 className={type}>Movements</H3>
        <Moves />
      </Box>
    </>
  );
};
