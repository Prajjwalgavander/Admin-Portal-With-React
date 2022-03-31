import { theme } from 'theme/theme'
import { ThemeProvider } from '@mui/material'
import TestRenderer from 'react-test-renderer'
import CustomTextField from 'components/ui-kit/TextField'

describe('Component - CustomTextField', () => {
  const wrappers = []
  const TextFieldJSX = ({
    helperText,
    label,
    placeholder,
    variant,
    type,
    required,
    error,
    size,
    onChange,
    value,
    enableValidation,
    labeltype
  }) => {
    return (
      <ThemeProvider theme={theme}>
        <CustomTextField
          label='test'
          enableValidation={false}
          disabled={false}
          type='string'
          fullWidth
          variant='outlined'
          required={false}
          placeholder='test'
          error='test'
          helperText='test'
          size='medium'
          multiline={false}
          onChange={() => {}}
          value='test'
          name='test'
          labeltype='default'
        />
      </ThemeProvider>
    )
  }

  const variants = ['filled', 'outlined', 'standard']
  const sizes = ['small', 'medium', 'large']
  const labelTypes = ['filter', 'default', 'dateFilter']

  variants.forEach(variant => (
    wrappers.push(TestRenderer.create(
      <TextFieldJSX variant={variant} />
    ))
  ))
  sizes.forEach(size => (
    wrappers.push(TestRenderer.create(
      <TextFieldJSX size={size} />
    ))
  ))
  labelTypes.forEach(type => (
    wrappers.push(TestRenderer.create(
      <TextFieldJSX labeltype={type} />
    ))
  ))
  wrappers.push(TestRenderer.create(
    <TextFieldJSX
      onChange={() => {}}
      value='john karter'
      error='This is an error'
      helperText='helper text'
      enableValidation
      label='Test'
      size='medium'
    />
  ))
  wrappers.push(TestRenderer.create(
    <TextFieldJSX helperText='helperText' />
  ))
  wrappers.push(TestRenderer.create(
    <TextFieldJSX enableValidation />
  ))
  wrappers.push(TestRenderer.create(
    <TextFieldJSX enableValidation={false} />
  ))
  wrappers.push(TestRenderer.create(
    <TextFieldJSX error />
  ))
  wrappers.push(TestRenderer.create(
    <TextFieldJSX error={false} />
  ))
  wrappers.push(TestRenderer.create(
    <TextFieldJSX onChange={() => {}} />
  ))

  it('renders all checkboxes correctly', () => {
    wrappers.forEach(wrapper => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
