import { theme } from 'theme/theme'
import { ThemeProvider } from '@mui/material'
import TestRenderer from 'react-test-renderer'
import AppHeader from 'components/ui-kit/AppHeader'

describe('Component - AppHeader', () => {
  const defaultProps = {
    openDrawer: true,
    handleDrawer: () => {},
    left: <h6>Left Side Content</h6>,
    right: <h6>Right Side Content</h6>
  }

  it('renders AppHeader component correctly', () => {
    const wrapper = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <AppHeader {...defaultProps} />
      </ThemeProvider>
    ).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
