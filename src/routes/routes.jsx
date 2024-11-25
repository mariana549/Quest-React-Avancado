import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "../pages/home/index";
import { Perfil } from "../pages/perfil/index";
import Colors from "../utils/colors/index";
import { Themes } from "../utils/themes/index";
import TogglerButton from "../utils/toggleButton/index";

function AppRoutes() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={{ Theme: Themes[theme], colors: Colors }}>
      <TogglerButton setTheme={setTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Perfil/:name" element={<Perfil />} />
      </Routes>
    </ThemeProvider>
  );
}

export { AppRoutes };
