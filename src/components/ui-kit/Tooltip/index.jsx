import React from 'react'
import PropTypes from 'prop-types'
import { StyledTooltip } from './styles'

const CustomTooltip = ({
  title, arrow, children, type, ...otherProps
}) => (
  <StyledTooltip
    title={title}
    arrow={arrow}
    type={type}
    {...otherProps}
  >
    {children}
  </StyledTooltip>
)

export default CustomTooltip

CustomTooltip.defaultProps = {
  title: '',
  arrow: true,
  type: 'default'
}

CustomTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  arrow: PropTypes.bool,
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf(['default', 'error'])
}
