import PropTypes from 'prop-types';

const Button = (props) => {
   const { padding, marginTop, color, borderRadius, background, cursor } = props;
   return <button {...props} style={{padding, marginTop, color, borderRadius, background: background, cursor}}/>
};

Button.defaultProps = {
   padding: "10px",
   marginTop: "5px",
   color: "white",
   borderRadius: "5px",
   background: "black",
   cursor: "pointer",
};

Button.propTypes = {
   padding: PropTypes.string.isRequired,
   marginTop: PropTypes.string.isRequired,
   color: PropTypes.string.isRequired,
   borderRadius: PropTypes.string.isRequired,
   background: PropTypes.string.isRequired,
   cursor: PropTypes.string.isRequired,
}

export { Button };
