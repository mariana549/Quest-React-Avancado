import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Card from ".";
import Colors from "../../../utils/colors";
import { Themes } from "../../../utils/themes";
describe("pokeCards", () => {
  const theme = Themes;
  const pokemonMock = [
    {
      name: "bulbasaur",
      sprites: {
        other: {
          "official-artwork": {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          },
        },
      },
      types: [
        { slot: 1, type: { name: "grass" } },
        { slot: 2, type: { name: "poison" } },
      ],
    },
  ];

  it("Deve renderizar corretamente o componente", () => {
    render(
      <Router>
        <ThemeProvider theme={{ Theme: theme, colors: Colors }}>
          <Card pokemon={pokemonMock} />
        </ThemeProvider>
      </Router>
    );
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    expect(screen.getByText(/grass/i)).toBeInTheDocument();
    expect(screen.getByText(/poison/i)).toBeInTheDocument();
    const img = screen.getByAltText(/bulbasaur/i);
    expect(img).toHaveAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    );
  });

  it("deve renderizar o link correto para o perfil do pokemon", () => {
    render(
      <Router>
        <ThemeProvider theme={{ Theme: theme, colors: Colors }}>
          <Card pokemon={pokemonMock} />
        </ThemeProvider>
      </Router>
    );
    const link = screen.getByRole("link", { name: /bulbasaur/i });
    expect(link).toHaveAttribute("href", "/Perfil/bulbasaur");
  });

  it("Deve lidar bem com ausencia de dados", () => {
    const { container } = render(
      <Router>
        <ThemeProvider theme={{ Theme: theme, colors: Colors }}>
          <Card pokemon={[]} />
        </ThemeProvider>
      </Router>
    );
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});
