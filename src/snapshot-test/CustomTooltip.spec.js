import TestRenderer from 'react-test-renderer'
import CustomTooltip from 'components/ui-kit/Tooltip'

describe('Component - CustomTooltip', () => {
  const wrappers = []

  const ToolTipJSX = ({ type, title, arrow, placement }) => {
    return (
      <CustomTooltip type={type} title={title} arrow={arrow} placement={placement}>
        <div style={{ backgroundColor: 'lightgray', width: '150px' }}>
          Hover over me
        </div>
      </CustomTooltip>
    )
  }

  wrappers.push(TestRenderer.create(
    <ToolTipJSX title='test label' placement='bottom-end' />
  ))
  wrappers.push(TestRenderer.create(
    <ToolTipJSX title='test label' arrow placement='top' />
  ))
  wrappers.push(TestRenderer.create(
    <ToolTipJSX title='test label' type='error' placement='left' />
  ))

  it('renders all CustomTooltip correctly', () => {
    wrappers.forEach(wrapper => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
