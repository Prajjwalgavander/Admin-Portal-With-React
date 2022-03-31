import TestRenderer from 'react-test-renderer'
import CustomSwitch from 'components/ui-kit/Switch'
import { theme } from 'theme/theme'
import { ThemeProvider } from '@mui/material'

describe('Component - CustomSwitch', () => {
  const wrappers = []
  const CustomSwitchJSX = ({
    onChange,
    label,
    size,
    labelPlacement,
    disabled
  }) => {
    return (
      <ThemeProvider theme={theme}>
        <CustomSwitch
          checked
          onChange={onChange}
          label={label}
          size={size}
          labelPlacement={labelPlacement}
          disabled={disabled}
        />
      </ThemeProvider>
    )
  }

  const labelPlacement = ['bottom', 'end', 'start', 'top']
  const sizes = ['small', 'medium', 'large']

  labelPlacement.forEach(placement => (
    wrappers.push(TestRenderer.create(
      <CustomSwitchJSX labelPlacement={placement} />
    ))
  ))
  sizes.forEach(size => (
    wrappers.push(TestRenderer.create(
      <CustomSwitchJSX size={size} />
    ))
  ))
  wrappers.push(TestRenderer.create(
    <CustomSwitchJSX onChange={() => {}} disabled />
  ))
  wrappers.push(TestRenderer.create(
    <CustomSwitchJSX onChange={() => {}} />
  ))
  wrappers.push(TestRenderer.create(
    <CustomSwitchJSX onChange={() => {}} />
  ))
  wrappers.push(TestRenderer.create(
    <CustomSwitchJSX onChange={() => {}} label='label' />
  ))
  wrappers.push(TestRenderer.create(
    <CustomSwitchJSX onChange={() => {}} />
  ))

  it('renders all checkboxes correctly', () => {
    wrappers.forEach(wrapper => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
