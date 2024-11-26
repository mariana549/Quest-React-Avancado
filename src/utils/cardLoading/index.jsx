import { Box, Carregando } from "./styledLoanding.js";

function CardLoanding() {
  const numberOfCards = 6;
  const elements = [];

  for (let i = 0; i < numberOfCards; i++) {
    elements.push(<Carregando key={i} />);
  }

  return (
    <Box role="alert" aria-busy="true" aria-label="loanding...">
      {elements}
    </Box>
  );
}

export default CardLoanding;
