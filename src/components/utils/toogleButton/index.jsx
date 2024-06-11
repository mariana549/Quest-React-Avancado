import sol from '../../../assets/image/sol.png';
import lua from '../../../assets/image/lua.png';
import PropTypes from "prop-types"
import { Box, ButtonToggle, Img } from './styledTogglerButton';

function TogglerButton({ togglerButton, theme }) {
  const SolLua = {
    Sol: sol,
    Lua: lua,
  };

  return (
    <Box>
       <ButtonToggle type="button" onClick={togglerButton}>
         <Img
           src={theme === 'dark' ? SolLua.Lua : SolLua.Sol}
           alt={theme === 'dark' ? 'button de tema modo ativo dark' : 'button de tema modo ativo light'}
         />
       </ButtonToggle>
    </Box>
  );
}

TogglerButton.propTypes = {
   togglerButton: PropTypes.func.isRequired,
   theme: PropTypes.string.isRequired,
}


export default TogglerButton;