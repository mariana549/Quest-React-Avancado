import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PokemonList } from ".";
import PokeContext from "../../../contexts/pokeContext/pokeContext";
import Colors from "../../../utils/colors";
import { Themes } from "../../../utils/themes";

const mockContextValue = {
  pokemons: [],
  loading: false,
  pokemonsList: [],
  showButtons: false,
  pixels: 0,
  setPokemonsVisiveis: jest.fn(),
  setShowButtons: jest.fn(),
};
describe("PokemonList", () => {
  const theme = Themes;
  it("deve renderizar corretamente o componente", () => {
    render(
      <Router>
        <ThemeProvider theme={{ Theme: theme, colors: Colors }}>
          <PokeContext.Provider value={mockContextValue}>
            <PokemonList />
          </PokeContext.Provider>
        </ThemeProvider>
      </Router>
    );

    expect(
      screen.getByText(/pokemons not found or undefined/i)
    ).toBeInTheDocument();
  });

  it("deve renderizar corretamente com os dados do pokemon", () => {
    const valueWithPokemons = {
      ...mockContextValue,
      pokemons: [{ id: 1, name: "bulbasaur" }],
      pokemonsList: [
        {
          id: 1,
          name: "bulbasaur",
          sprites: {
            other: {
              "official-artwork": {
                front_default: "https://example.com/bulbasaur.png",
              },
            },
          },
          types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
        },
      ],
    };
    render(
      <Router>
        <ThemeProvider theme={{ Theme: Themes, colors: Colors }}>
          <PokeContext.Provider value={valueWithPokemons}>
            <PokemonList />
          </PokeContext.Provider>
        </ThemeProvider>
      </Router>
    );
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });

  it("deve exibir o texto alternativo 'loanding...'", () => {
    render(
      <Router>
        <ThemeProvider theme={{ Theme: Themes, colors: Colors }}>
          <PokeContext.Provider value={{ ...mockContextValue, loading: true }}>
            <PokemonList />
          </PokeContext.Provider>
        </ThemeProvider>
      </Router>
    );

    expect(
      screen.getByRole("alert", { name: /loanding.../i })
    ).toBeInTheDocument();
  });

  it("deve exibir o texto alternativo 'loanding...'", () => {
    render(
      <Router>
        <ThemeProvider theme={{ Theme: Themes, colors: Colors }}>
          <PokeContext.Provider value={{ ...mockContextValue, loading: true }}>
            <PokemonList />
          </PokeContext.Provider>
        </ThemeProvider>
      </Router>
    );

    expect(
      screen.getByRole("alert", { name: /loanding.../i })
    ).toBeInTheDocument();
  });

  it('Deve exibir o botão "Search More"', () => {
    const valueWithShowButtons = {
      ...mockContextValue,
      showButtons: true,
      pokemonsList: [
        {
          id: 1,
          name: "bulbasaur",
          sprites: {
            other: {
              "official-artwork": {
                front_default: "https://example.com/bulbasaur.png",
              },
            },
          },
          types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
        },
      ],
      pokemons: [
        { id: 1, name: "bulbasaur" },
        { id: 2, name: "ivysaur" },
      ],
    };
    render(
      <Router>
        <ThemeProvider theme={{ Theme: Themes, colors: Colors }}>
          <PokeContext.Provider value={valueWithShowButtons}>
            <PokemonList />
          </PokeContext.Provider>
        </ThemeProvider>
      </Router>
    );
    expect(screen.getByText(/search more/i)).toBeInTheDocument();
  });
  
  it('Deve exibir o botão "Go up to" ao inicializar e ao clicar deve exibir o botão "Go down to"', () => {
    const valueWithShowButtons = {
      ...mockContextValue,
      showButtons: true,
      pixels: 900,
      pokemonsList: [
        {
          id: 1,
          name: "bulbasaur",
          sprites: {
            other: {
              "official-artwork": {
                front_default: "https://example.com/bulbasaur.png",
              },
            },
          },
          types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
        },
      ],
      pokemons: [{ id: 1, name: "bulbasaur" }],
    };
    render(
      <Router>
        <ThemeProvider theme={{ Theme: Themes, colors: Colors }}>
          <PokeContext.Provider value={valueWithShowButtons}>
            <PokemonList />
          </PokeContext.Provider>
        </ThemeProvider>
      </Router>
    );

    const buttonUp = screen.getByAltText(/Button go up to/i);
    expect(buttonUp).toBeInTheDocument();
    fireEvent.click(buttonUp);
    const buttonDown = screen.getByAltText(/Button go down to/i);
    expect(buttonDown).toBeInTheDocument();
  });

  it("Deve atualizar o estado de showButtons corretamente", () => {
    const mockSetShowButtons = jest.fn();
    const valueWithPokemons = {
      ...mockContextValue,
      pokemons: [{ id: 1, name: "bulbasaur" }],
      setShowButtons: mockSetShowButtons,
    };

    render(
      <Router>
        <ThemeProvider theme={{ Theme: Themes, colors: Colors }}>
          <PokeContext.Provider value={valueWithPokemons}>
            <PokemonList />
          </PokeContext.Provider>
        </ThemeProvider>
      </Router>
    );

    expect(mockSetShowButtons).toHaveBeenCalledWith(true);
  });
});
