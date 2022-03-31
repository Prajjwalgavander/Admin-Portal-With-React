
import PropTypes from 'prop-types'
import { getAuthToken } from 'utils/common-services/cookie.services'
import PrivateRoute from './HOC/PrivateRoutes'
import PublicRoutes from './HOC/PublicRoutes'

const RouteValidator = ({ hasAuth, component: Component, ...props }) => {
  const isAuthenticated = getAuthToken()
  return hasAuth
    ? <PrivateRoute Component={Component} isAuthenticated={isAuthenticated} />
    : <PublicRoutes Component={Component} isAuthenticated={isAuthenticated} />
}

RouteValidator.propTypes = {
  component: PropTypes.elementType.isRequired,
  hasAuth: PropTypes.bool,
  path: PropTypes.string
}

export default RouteValidator
