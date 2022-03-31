import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

const CustomButton = ({
  type,
  variant,
  color,
  size,
  children,
  disabled,
  fullWidth,
  onClick,
  startIcon,
  endIcon,
  disableElevation,
  ...otherProps
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      fullWidth={fullWidth}
      variant={variant}
      onClick={onClick}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      disableElevation={disableElevation}
      {...otherProps}
    >
      {children}
    </StyledButton>
  )
}

export default CustomButton

CustomButton.defaultProps = {
  variant: 'outlined',
  color: undefined,
  size: 'medium',
  disabled: false,
  fullWidth: false,
  type: 'button',
  onClick: () => null,
  classes: {},
  startIcon: null,
  endIcon: null,
  disableElevation: false
}

CustomButton.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  type: PropTypes.oneOf(['submit', 'button']),
  color: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  disableElevation: PropTypes.bool
}
