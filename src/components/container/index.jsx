import PropTypes from 'prop-types'
import { ContainerDiv } from './styledContainer'

function Container({children}) {
   return (
      <ContainerDiv>
         {children}
      </ContainerDiv>
   )
}

export default Container

Container.propTypes = {
   children: PropTypes.any.isRequired
}