import Colors from "../colors";

export const limitPokemons = 1302;

export const MainBg = (props) => props.theme.Theme.mainBg;

export const CardBg = (props) =>
  Colors.cardBg[
    props.children[0].props.children[2].props.children[0].props.children
  ];

export const CardDiv = (props) => props.theme.Theme.cardDiv;

export const MainPerfilBg = (props) => props.theme.Theme.mainPerfilBg;

export const Color0 = (props) => props.theme.Theme.color0;

export const Color10 = (props) => props.theme.Theme.color10;

export const Color20 = (props) => props.theme.Theme.color20;

export const Shadow = (props) => Colors.cardBg[props.className.type.name];

export const ColorCardBg = (props) => props.theme.colors.cardBg[props.children];

export const ColorTypes = (props) => props.theme.colors.types[props.children];

export const BackgroundColorRadial = (props) =>
  props.theme.Theme.mainBg === "transparent"
    ? Colors.cardBg[props.className.type.name]
    : Colors.types[props.className.type.name];

export const ColorTexts = (props) =>
  props.theme.Theme.mainBg === "transparent"
    ? Colors.types[props.className.type.name]
    : Colors.cardBg[props.className.type.name];
