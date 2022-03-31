import CustomTooltip from './index'

export default {
  title: 'atoms/Tooltip',
  args: {
    type: 'default',
    title: 'Tooltip infomation',
    arrow: false,
    placement: 'bottom'
  },
  argTypes: {
    type: {
      type: 'select',
      options: ['default', 'error']
    },
    placement: {
      type: 'select',
      options: [
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top'
      ]
    }
  }
}

export const Default = ({ type, title, arrow, placement }) => {
  return (
    <div style={{
      height: '200px',
      width: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
      <CustomTooltip type={type} title={title} arrow={arrow} placement={placement}>
        <div style={{ backgroundColor: 'lightgray', width: '150px' }}>
          Hover over me
        </div>
      </CustomTooltip>
    </div>
  )
}
