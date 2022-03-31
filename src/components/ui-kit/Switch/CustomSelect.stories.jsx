import CustomSwitch from './index'

export default {
  title: 'atoms/Switch',
  args: {
    checked: true,
    disabled: false,
    size: 'medium'
  },
  argTypes: {
    size: {
      type: 'select',
      options: ['small', 'medium', 'large']
    },
    onChange: { action: 'onChange' }
  }
}

export const Default = ({ checked, onChange, disabled, size }) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '900px' }}>
        <CustomSwitch checked={checked} disabled={disabled} size={size} onChange={onChange} />
      </div>
    </>
  )
}
