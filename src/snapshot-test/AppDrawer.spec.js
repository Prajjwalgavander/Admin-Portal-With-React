import AppDrawer from 'components/ui-kit/AppDrawer'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

describe('Component - AppDrawer', () => {
  const wrapper = shallow(
    <AppDrawer
      openDrawer
      handleDrawer={() => { }}
      text='Demo Heading'
      isMobileView
    >
      <h4>Pass the list as a children in AppDrawer component</h4>
    </AppDrawer>
  )

  it('renders AppDrawer component correctly', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
