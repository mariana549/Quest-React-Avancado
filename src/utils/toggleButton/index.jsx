import PropTypes from "prop-types";
import lua from "../../assets/image/lua.png";
import sol from "../../assets/image/sol.png";
import { togglerButtonFunction } from '../../functions/togglerButtonFunction.js';
import { Box, ButtonToggle, Img } from "./styledTogglerButton.js";

function TogglerButton({ setTheme, theme }) {
  const SolLua = {
    Sol: sol,
    Lua: lua,
  };

  return (
    <Box>
      <ButtonToggle type="button" onClick={() => togglerButtonFunction(setTheme)}>
        <Img
          src={theme === "dark" ? SolLua.Lua : SolLua.Sol}
          alt={
            theme === "dark"
              ? "button de tema modo ativo dark"
              : "button de tema modo ativo light"
          }
        />
      </ButtonToggle>
    </Box>
  );
}

TogglerButton.propTypes = {
  setTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default TogglerButton;
