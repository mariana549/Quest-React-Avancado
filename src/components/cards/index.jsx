import PropTypes from 'prop-types';

export default function Card({ children }) {
   return (
      <>
         {children}
      </>
   )
}

Card.propTypes = {
   children: PropTypes.any.isRequired 
 };
