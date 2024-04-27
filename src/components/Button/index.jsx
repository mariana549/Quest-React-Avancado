import PropTypes from 'prop-types';

const Button = (props) => {
   const { padding, marginTop, color, borderRadius, background, label } = props;
   return <button {...props} style={{padding, marginTop, color, borderRadius, background: background}}>{label}</button>;
};

Button.defaultProps = {
   padding: "10px",
   marginTop: "5px",
   color: "white",
   borderRadius: "5px",
   background: "black",
   label: "Subir ao Topo"
};

Button.propTypes = {
   padding: PropTypes.string.isRequired,
   marginTop: PropTypes.string.isRequired,
   color: PropTypes.string.isRequired,
   borderRadius: PropTypes.string.isRequired,
   background: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired
}

export { Button };
