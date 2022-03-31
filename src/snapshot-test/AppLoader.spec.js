import { colors } from 'theme/colors'
import TestRenderer from 'react-test-renderer'
import { LOADER_TYPE } from 'utils/constants'
import AppLoader from 'components/ui-kit/AppLoader'

describe('Component - AppLoader', () => {
  const defaultProps = {
    size: 15,
    height: 40,
    width: 5,
    radius: 2,
    color: colors.darkNavyBlue,
    speedMultiplier: 1,
    margin: 2
  }

  it('renders PULSE variant AppLoader component correctly', () => {
    const wrapper1 = TestRenderer.create(
      <AppLoader variant={LOADER_TYPE.PULSE} {...defaultProps} />
    ).toJSON()
    expect(wrapper1).toMatchSnapshot()
  })

  it('renders SCALE variant AppLoader component correctly', () => {
    const wrapper2 = TestRenderer.create(
      <AppLoader variant={LOADER_TYPE.SCALE} {...defaultProps} />
    ).toJSON()
    expect(wrapper2).toMatchSnapshot()
  })
})
