import Colors from "../colors";

// variavel para definir o limit de pokemons
export const limitPokemons = 1302;

export const mainPerfilBg = (props) => props.theme.Theme.mainPerfilBg;

export const backgroundColorRadial = (props) =>
   props.theme.Theme.mainBg === "transparent" ?
      Colors.cardBg[props.className.type.name] :
      Colors.types[props.className.type.name]
;

export const ColorTexts = (props) =>
   props.theme.Theme.mainBg === "transparent" ?
      Colors.types[props.className.type.name] :
      Colors.cardBg[props.className.type.name]
;

export const Color0 = (props) => props.theme.Theme.color0

export const Color10 = (props) => props.theme.Theme.color0

export const shadow = (props)=> Colors.cardBg[props.className.type.name]

export const ColorCardBg = (props) => props.theme.colors.cardBg[props.children]

export const ColorTypes = (props) => props.theme.colors.types[props.children]
