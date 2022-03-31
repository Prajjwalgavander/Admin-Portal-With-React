import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

const CustomTypography = ({
  variant,
  display,
  align,
  value,
  noWrap,
  ...otherProps
}) => {
  return (
    <Typography
      variant={variant}
      display={display}
      align={align}
      noWrap={noWrap}
      {...otherProps}
    >
      {value}
    </Typography>
  )
}

export default CustomTypography

CustomTypography.defaultProps = {
  variant: 'body1',
  display: 'initial',
  align: 'inherit',
  noWrap: false
}

CustomTypography.propTypes = {
  variant: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit'
  ]),
  display: PropTypes.oneOf(['initial', 'block', 'inline']),
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  value: PropTypes.string.isRequired,
  noWrap: PropTypes.bool
}
