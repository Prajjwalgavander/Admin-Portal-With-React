// import TestRenderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { TOASTER_TYPE } from 'utils/constants'
import { Toaster } from 'components/ui-kit/AppToaster'

describe('Component - Toaster', () => {
  const wrapper1 = shallow(
    <Toaster
      toasterType={TOASTER_TYPE.success}
      openToaster
      toasterMessage='Default Message'
      handleToasterClose={() => {}}
    />
  )

  const wrapper2 = shallow(
    <Toaster
      toasterType={TOASTER_TYPE.error}
      openToaster
      toasterMessage='Default Message'
      handleToasterClose={() => {}}
    />
  )

  const wrapper3 = shallow(
    <Toaster
      toasterType={TOASTER_TYPE.warning}
      openToaster
      toasterMessage='Default Message'
      handleToasterClose={() => {}}
    />
  )

  const wrapper4 = shallow(
    <Toaster
      toasterType={TOASTER_TYPE.info}
      openToaster
      toasterMessage='Default Message'
      handleToasterClose={() => {}}
    />
  )

  it('renders Success Toaster correctly', () => {
    expect(shallowToJson(wrapper1)).toMatchSnapshot()
  })

  it('renders Error Toaster correctly', () => {
    expect(shallowToJson(wrapper2)).toMatchSnapshot()
  })

  it('renders Warning Toaster correctly', () => {
    expect(shallowToJson(wrapper3)).toMatchSnapshot()
  })

  it('renders Info Toaster correctly', () => {
    expect(shallowToJson(wrapper4)).toMatchSnapshot()
  })
})
