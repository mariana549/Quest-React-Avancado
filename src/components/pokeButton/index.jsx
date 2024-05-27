import PropTypes from 'prop-types';

const Button = (props) => {
   const { padding, margin, color, borderRadius, background, cursor } = props;
   return <button {...props} style={{padding, margin, color, borderRadius, background: background, cursor}}/>
};

Button.defaultProps = {
   padding: "10px",
   margin: "15px",
   color: "white",
   borderRadius: "5px",
   background: "black",
   cursor: "pointer",
};

Button.propTypes = {
   padding: PropTypes.string.isRequired,
   margin: PropTypes.string.isRequired,
   color: PropTypes.string.isRequired,
   borderRadius: PropTypes.string.isRequired,
   background: PropTypes.string.isRequired,
   cursor: PropTypes.string.isRequired,
}

export { Button };
