import { theme } from 'theme/theme'
import { ThemeProvider } from '@mui/material'
import TestRenderer from 'react-test-renderer'
import DateRangePickerInput from 'components/ui-kit/DateRangePickerInput'

describe('Component - DateRangePickerInput', () => {
  const wrappers = []
  const types = ['default', 'dateFilter']
  const DateRangePickerInputJSX = ({ type }) => (
    <ThemeProvider theme={theme}>
      <DateRangePickerInput title='demo title' type={type} />
    </ThemeProvider>
  )

  types.map(type => (
    wrappers.push(TestRenderer.create(
      <DateRangePickerInputJSX type={type} />
    ).toJSON())
  ))

  it('renders all type of DateRangePickerInput component correctly', () => {
    wrappers.forEach(wrapper => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
