import React from 'react'
import PropTypes from 'prop-types'
import { StyledTextField } from './styles'
import { InputAdornment } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import LabelContainer from 'components/ui-kit/LabelContainer'
import { StyledTooltip } from '../Tooltip/styles'

const CustomTextField = ({
  name,
  helperText,
  label,
  placeholder,
  inputRef,
  fullWidth,
  variant,
  type,
  disabled,
  required,
  InputProps,
  error,
  size,
  rows,
  onChange,
  value,
  enableValidation,
  labeltype,
  ...otherProps
}) => {
  const Adornment = ({ error, tooltipTitle }) => {
    return (
      <>
        <InputAdornment
          position='end'
          sx={{ backgroundColor: (theme) => theme.colors.white }}
        >
          {error
            ? (
              <StyledTooltip
                title={tooltipTitle}
                placement='top'
                arrow
                type='error'
              >
                <ErrorOutlineIcon color='error' />
              </StyledTooltip>
              )
            : (
              <CheckCircleOutlineIcon color='success' />
              )}
        </InputAdornment>
      </>
    )
  }
  return (
    <LabelContainer type={labeltype} label={label}>
      <StyledTextField
        inputRef={inputRef}
        fullWidth={!!fullWidth}
        name={name}
        variant={variant}
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        helperText={labeltype !== 'filter' ? error || helperText : undefined}
        error={labeltype !== 'filter' ? !!error : undefined}
        size={size}
        rows={rows}
        onChange={onChange}
        value={value}
        labeltype={labeltype}
        InputProps={{
          endAdornment:
            enableValidation && labeltype !== 'filter'
              ? (
                  value && <Adornment error={error} tooltipTitle={helperText} />
                )
              : (
                <></>
                )
        }}
        {...otherProps}
      />
    </LabelContainer>
  )
}

export default CustomTextField

CustomTextField.defaultProps = {
  label: '',
  enableValidation: false,
  disabled: false,
  type: 'string',
  fullWidth: true,
  variant: 'outlined',
  inputRef: null,
  required: false,
  placeholder: '',
  error: null,
  helperText: null,
  size: 'medium',
  multiline: false,
  onChange: () => {},
  value: '',
  name: '',
  labeltype: 'default'
}

CustomTextField.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  InputProps: PropTypes.shape({}),
  error: PropTypes.string,
  helperText: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  multiline: PropTypes.bool,
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  enableValidation: PropTypes.bool,
  labeltype: PropTypes.oneOf(['filter', 'default', 'dateFilter'])
}
