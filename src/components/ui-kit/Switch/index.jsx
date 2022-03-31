import React from 'react'
import PropTypes from 'prop-types'
import { StyledFormControlLabel, StyledSwitch } from './styles'

const CustomSwitch = ({
  checked,
  onChange,
  label,
  labelPlacement,
  ...otherProps
}) => {
  return (
    label && labelPlacement
      ? <StyledFormControlLabel
          checked={checked}
          control={<StyledSwitch
            checked={checked}
            onChange={onChange}
            color={checked ? 'success' : 'error'}
            {...otherProps}
                   />}
          label={label}
          labelPlacement={labelPlacement}
        />
      : <StyledSwitch
          checked={checked}
          onChange={onChange}
          color={checked ? 'success' : 'error'}
          {...otherProps}
        />
  )
}

export default CustomSwitch

CustomSwitch.defaultProps = {
  size: 'medium',
  disabled: false,
  onChange: () => {},
  label: ''
}

CustomSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  labelPlacement: PropTypes.oneOf(['bottom', 'end', 'start', 'top']),
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired
}
