import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "../pages/home";
import { Perfil } from "../pages/perfil";
import Colors from "../utils/colors";
import { Themes } from "../utils/themes";
import TogglerButton from "../utils/toogleButton";

function AppRoutes() {
  const [theme, setTheme] = useState("light");

  function togglerButton() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }
  
  return (
    <ThemeProvider theme={{ Theme: Themes[theme], colors: Colors }}>
      <TogglerButton togglerButton={togglerButton} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Perfil/:name" element={<Perfil />} />
      </Routes>
    </ThemeProvider>
  );
}

export { AppRoutes };
