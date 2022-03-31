import TestRenderer from 'react-test-renderer'
import LabelContainer from 'components/ui-kit/LabelContainer'
import { ThemeProvider } from '@mui/material'
import { theme } from 'theme/theme'

describe('Component - LabelContainer', () => {
  const wrappers = []
  const LabelContainerJSX = ({ children, type, label }) => {
    return (
      <ThemeProvider theme={theme}>
        <LabelContainer type={type} label={label}>
          {children}
        </LabelContainer>
      </ThemeProvider>
    )
  }

  const types = ['filter', 'default', 'dateFilter']

  types.forEach((type) =>
    wrappers.push(
      TestRenderer.create(
        <LabelContainerJSX type={type} label='label'>
          <div>Label text</div>
        </LabelContainerJSX>
      )
    )
  )
  wrappers.push(
    TestRenderer.create(
      <LabelContainerJSX label='label'>
        <div>Label text</div>
      </LabelContainerJSX>
    )
  )

  it('renders all labels correctly', () => {
    wrappers.forEach((wrapper) => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
