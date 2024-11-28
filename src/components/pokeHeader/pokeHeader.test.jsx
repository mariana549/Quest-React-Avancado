import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PokeContext from "../../contexts/pokeContext/pokeContext";
import { PokeHeader } from ".";
import Colors from "../../utils/colors";
import { Themes } from "../../utils/themes/index";
import { render, screen, fireEvent } from "@testing-library/react";
import logoPokemon from "../../assets/image/pokemon-logo.png";

const mockContextValue = {
  pokemons: [
    {
      id: 1,
      name: "bulbasaur",
      sprites: {
        other: {
          showdown: {
            front_default: "https://example.com/bulbasaur.png",
          },
        },
      },
    },
    {
      id: 25,
      name: "pikachu",
      sprites: {
        other: {
          showdown: {
            front_default: "https://example.com/pikachu.png",
          },
        },
      },
    },
  ],
  loading: false,
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
    {
      id: 25,
      name: "pikachu",
      sprites: {
        other: {
          "official-artwork": {
            front_default: "https://example.com/pikachu.png",
          },
        },
      },
      types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
    },
  ],
  initialPokemons: [
    { name: "bulbasaur", types: [{ type: { name: "grass" } }] },
    { name: "charmander", types: [{ type: { name: "fire" } }] },
  ],
  setPokemons: jest.fn(),
  setPixels: jest.fn(),
  setPokemonsVisiveis: jest.fn(),
  setShowButtons: jest.fn(),
};

const mockPokeNames = ["pikachu", "bulbasaur"];
const mockGetPokemonsSpritesByName = jest.fn();

describe("PokeHeader", () => {
  const themes = Themes;

  // beforeEach(() => {

  // })

  it("deve renderizar o componente corretamente", () => {
    render(
      <Router>
        <ThemeProvider theme={{ Theme: themes, colors: Colors }}>
          <PokeContext.Provider value={mockContextValue}>
            <PokeHeader />
          </PokeContext.Provider>
        </ThemeProvider>
      </Router>
    );

    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByLabelText(/Search pokemon/i)).toBeInTheDocument();

    expect(
      screen.getByLabelText(/Filter Pokémon by type/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/grass/i)).toBeInTheDocument();
    expect(screen.getByText(/poison/i)).toBeInTheDocument();
  });

  it("deve renderizar o logo do pokemon corretamente", () => {
    render(
      <Router>
        <ThemeProvider theme={{ Theme: themes, colors: Colors }}>
          <PokeContext.Provider value={mockContextValue}>
            <PokeHeader />
          </PokeContext.Provider>
        </ThemeProvider>
      </Router>
    );

    const logo = screen.getByAltText("Logo");
    expect(logo).toHaveAttribute("src", logoPokemon);
  });

  it("deve renderizar os pokemons iniciais corretamente", () => {
    render(
      <Router>
        <ThemeProvider theme={{ Theme: themes, colors: Colors }}>
          <PokeContext.Provider value={mockContextValue}>
            <PokeHeader />
          </PokeContext.Provider>
        </ThemeProvider>
      </Router>
    );

    mockGetPokemonsSpritesByName(mockContextValue.pokemons, mockPokeNames);
    const initialPokemons = screen.getByAltText(
      /Animated image of Pokémon bulbasaur/i
    );
    expect(initialPokemons).toBeInTheDocument();
  });

  it("deve alterar os tipos de Pokémon quando o filtro de tipos é modificado", () => {
    render(
      <Router>
        <ThemeProvider theme={{ Theme: themes, colors: Colors }}>
          <PokeContext.Provider value={mockContextValue}>
            <PokeHeader />
          </PokeContext.Provider>
        </ThemeProvider>
      </Router>
    );

    const typeFilter = screen.getByLabelText(/Filter Pokémon by type/i);
    expect(typeFilter).toBeInTheDocument();

    fireEvent.change(typeFilter, { target: { value: "fire" } });

    expect(mockContextValue.setPokemons).toHaveBeenCalledWith([
      { name: "charmander", types: [{ type: { name: "fire" } }] },
    ]);
  });
});
