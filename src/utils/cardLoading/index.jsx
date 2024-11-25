import { Box, Carregando } from "./styledLoanding.js";

function CardLoanding() {
  const numberOfCards = 6;
  const elements = [];

  for (let i = 0; i < numberOfCards; i++) {
    elements.push(<Carregando key={i} />);
  }

  return <Box>{elements}</Box>;
}

export default CardLoanding;
