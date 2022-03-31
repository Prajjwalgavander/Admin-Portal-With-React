import CustomCheckbox from './index'

export default {
  title: 'atoms/Checkbox',
  args: {
    checked: false,
    disabled: false
  }
}

export const Default = ({ checked, disabled }) => {
  return (
    <>
      <div>
        <h2>Small</h2>
        <CustomCheckbox checked={checked} disabled={disabled} size='small' label='square' />
        <CustomCheckbox checked={checked} disabled={disabled} size='small' label='circle' circle />
      </div>

      <div>
        <h2>Medium</h2>
        <CustomCheckbox checked={checked} disabled={disabled} size='medium' label='square' />
        <CustomCheckbox checked={checked} disabled={disabled} size='medium' label='circle' circle />

      </div>

      <div>
        <h2>Large</h2>
        <CustomCheckbox checked={checked} disabled={disabled} size='large' label='square' />
        <CustomCheckbox checked={checked} disabled={disabled} size='large' label='circle' circle />
      </div>

      <h2>Label Position</h2>
      <div style={{ display: 'flex', width: '800px', justifyContent: 'space-around' }}>
        <CustomCheckbox checked={checked} disabled={disabled} label='Top Label' labelPlacement='top' />
        <CustomCheckbox checked={checked} disabled={disabled} label='Bottom Label' labelPlacement='bottom' />
        <CustomCheckbox checked={checked} disabled={disabled} label='Start Label' labelPlacement='start' />
        <CustomCheckbox checked={checked} disabled={disabled} label='End Label' labelPlacement='end' />
      </div>
    </>
  )
}
