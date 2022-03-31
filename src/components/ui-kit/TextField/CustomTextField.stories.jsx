import CustomTextField from './index'

export default {
  title: 'atoms/TextField',
  args: {
    value: 'john karter',
    error: 'This is an error',
    helperText: 'helper text',
    enableValidation: true,
    label: 'User Name',
    size: 'medium'
  },
  argTypes: {
    labeltype: {
      type: 'select',
      options: ['default', 'filter']
    },
    size: {
      type: 'select',
      options: ['small', 'medium', 'large']
    },
    onChange: { action: 'onChange' }
  }
}

export const Default = ({
  label,
  labeltype,
  value,
  error,
  helperText,
  enableValidation,
  onChange,
  size
}) => {
  return (
    <>
      <CustomTextField
        label={label}
        enableValidation={enableValidation}
        error={error}
        value={value}
        helperText={helperText}
        labeltype={labeltype}
        onChange={onChange}
        size={size}
      />
    </>
  )
}
