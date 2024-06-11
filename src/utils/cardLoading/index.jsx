import { Box, Carregando } from "./styledLoanding";

function CardLoanding() {
    const numCarregando = 6;
    const carregandoElements = [];

    for (let i = 0; i < numCarregando; i++) {
        carregandoElements.push(<Carregando key={i} />);
    }

    return <Box>{carregandoElements}</Box>;
}

export default CardLoanding;
