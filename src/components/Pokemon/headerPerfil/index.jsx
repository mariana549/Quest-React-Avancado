import { useContext } from "react";
import Context from "../../../contexts/perfilContext/context";
import {
  Div,
  Imagem,
  Imagem2,
  ImgContainer,
  PerfilTitulo,
  PokeId,
  Tipo,
  TypesList,
} from "./headerPerfilStyled.js";

function HeaderPerfil() {
  const { pokemon, type } = useContext(Context);

  return (
    <>
      <Div>
        <PerfilTitulo className={type}>{pokemon?.name}</PerfilTitulo>
        <PokeId>#{pokemon?.id}</PokeId>
      </Div>
      <ImgContainer>
        <abbr title="Normal version">
          <Imagem
            src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
            alt={pokemon?.name}
            style={{
              transform: "translateX(20px)",
            }}
          />
        </abbr>
        <abbr title="Shiny version">
          <Imagem2
            src={pokemon?.sprites?.other?.["official-artwork"]?.front_shiny}
            alt={pokemon?.name}
          />
        </abbr>
      </ImgContainer>
      <TypesList>
        {pokemon?.types.map((type, i) => (
          <Tipo key={i}>{type.type.name}</Tipo>
        ))}
      </TypesList>
    </>
  );
}

export default HeaderPerfil;
