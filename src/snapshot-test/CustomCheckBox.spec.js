import TestRenderer from 'react-test-renderer'
import { ThemeProvider } from '@mui/material'
import { theme } from 'theme/theme'
import CustomCheckbox from 'components/ui-kit/CheckBox'

describe('Component - CustomCheckbox', () => {
  const wrappers = []
  const CheckboxJSX = ({
    label,
    onChange,
    labelPlacement,
    checked,
    size,
    circle,
    disabled
  }) => {
    return (
      <ThemeProvider theme={theme}>
        <CustomCheckbox
          checked={checked}
          label={label}
          onChange={onChange}
          labelPlacement={labelPlacement}
          size={size}
          circle={circle}
          disabled={disabled}
        />
      </ThemeProvider>
    )
  }
  const checkBoxLabelPlacement = ['bottom', 'end', 'start', 'top']
  const sizes = ['small', 'medium']
  checkBoxLabelPlacement.forEach(placement => (
    wrappers.push(TestRenderer.create(
      <CheckboxJSX labelPlacement={placement} />
    ))
  ))
  sizes.forEach(size => (
    wrappers.push(TestRenderer.create(
      <CheckboxJSX size={size} />
    ))
  ))
  wrappers.push(TestRenderer.create(
    <CheckboxJSX
      checked={false}
      onChange={() => {}}
      label='Checked start'
      labelPlacement='start'
    />
  ))
  wrappers.push(TestRenderer.create(
    <CheckboxJSX circle />
  ))
  wrappers.push(TestRenderer.create(
    <CheckboxJSX circle={false} />
  ))
  wrappers.push(TestRenderer.create(
    <CheckboxJSX checked />
  ))
  wrappers.push(TestRenderer.create(
    <CheckboxJSX checked={false} />
  ))
  wrappers.push(TestRenderer.create(
    <CheckboxJSX label='label' />
  ))
  wrappers.push(TestRenderer.create(
    <CheckboxJSX onChange={() => {}} />
  ))

  it('renders all checkboxes correctly', () => {
    wrappers.forEach(wrapper => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
