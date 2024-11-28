import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Context from "../../../contexts/perfilContext/context";
import { HabilitiePokemon } from ".";
import { ThemeProvider } from "styled-components";
import Colors from "../../../utils/colors";
import { Themes } from "../../../utils/themes";
import { getAbility } from "../../../services/requestApi/getAbility";
import { checkPropTypes } from "prop-types";

const themes = Themes;

jest.mock("../../../services/requestApi/getAbility");

describe("HabilitePokemon", () => {
  const mockData = [
    {
      effect: "Boosts the Pokémon's Speed stat in harsh sunlight.",
      language: { name: "en" },
    },
  ];

  beforeEach(() => {
    getAbility.mockResolvedValue(mockData);
  });

  it("deve renderizar o componente corretamente", () => {
    render(
      <Router>
        <ThemeProvider theme={{ Theme: themes, colors: Colors }}>
          <Context.Provider value={{ type: "fire" }}>
            <HabilitiePokemon name="Solar Power" />
          </Context.Provider>
        </ThemeProvider>
      </Router>
    );

    expect(screen.getByText(/Solar Power/i)).toBeInTheDocument();
  });

  it("deve renderizar o nome a descrição das habilidades corretamente", async () => {
    render(
      <Router>
        <ThemeProvider theme={{ Theme: themes, colors: Colors }}>
          <Context.Provider value={{ type: "fire" }}>
            <HabilitiePokemon name="Solar Power" />
          </Context.Provider>
        </ThemeProvider>
      </Router>
    );

    await waitFor(() => {
      expect(
        screen.getByText(/Boosts the Pokémon's Speed stat in harsh sunlight./i)
      ).toBeInTheDocument();
    });
  });

  it("deve aplicar a classe correta baseada no tipo de Pokémon do contexto", () => {
    render(
      <Router>
        <ThemeProvider theme={{ Theme: themes, colors: Colors }}>
          <Context.Provider value={{ type: "water" }}>
            <HabilitiePokemon name="torrent" />
          </Context.Provider>
        </ThemeProvider>
      </Router>
    );
    const nameElement = screen.getByText(/torrent/i);
    expect(nameElement).toHaveClass("water");
  });

  it("deve lançar um erro se o prop name não for fornecido", () => {
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    checkPropTypes(
      HabilitiePokemon.propTypes,
      { name: undefined },
      "prop",
      HabilitiePokemon.name
    );
    expect(consoleError).toHaveBeenCalled();
    consoleError.mockRestore();
  });
});
