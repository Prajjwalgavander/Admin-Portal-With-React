import CustomButton from 'components/ui-kit/Button/index'
import CustomCheckbox from 'components/ui-kit/CheckBox/index'
import DateRangePickerInput from 'components/ui-kit/DateRangePickerInput/index'
import CustomSelect from 'components/ui-kit/Select/index'
import CustomSwitch from 'components/ui-kit/Switch/index'
import CustomTextField from 'components/ui-kit/TextField/index'
import { useState } from 'react'

const CancelledGames = () => {
  const [age, setAge] = useState('12')
  const [checkedOne, setCheckedOne] = useState(true)
  const [checkedTwo, setCheckedTwo] = useState(false)

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const handleCheckBoxOneChange = (event) => {
    setCheckedOne(event.target.checked)
  }
  const handleCheckBoxTwoChange = (event) => {
    setCheckedTwo(event.target.checked)
  }
  const items = [
    {
      id: 1,
      label: 'Dropdown Open',
      value: '12'
    },
    {
      id: 2,
      label: 'Dropdown Open',
      value: '13'
    }
  ]

  return (
    <div>
      <h1>Basic Reusable Components</h1>
      <div>
        <CustomButton>Show Transaction</CustomButton>
        <CustomButton variant='text'>Show Transaction</CustomButton>
      </div>
      <CustomSwitch size='small' color='error' label='start' labelPlacement='start' checked />
      <CustomSwitch size='medium' color='error' label='start' labelPlacement='start' checked />
      <CustomSwitch size='large' checked />
      <CustomSwitch size='small' disabled checked />
      <div>
        <CustomSelect
          value={age}
          onChange={handleChange}
          items={items}
          labeltype='filter'
          label='label'
        />
        <CustomSelect
          value={age}
          onChange={handleChange}
          items={items}
          label='label'
        />
        <CustomSelect
          size='small'
          value={age}
          onChange={handleChange}
          items={items}
          styled={false}
          label='label'
        />
      </div>
      <div>
        <CustomCheckbox
          checked={checkedOne}
          onChange={handleCheckBoxOneChange}
          label='Checked start'
          labelPlacement='start'
        />
      </div>
      <div>
        <CustomCheckbox
          checked={checkedTwo}
          onChange={handleCheckBoxTwoChange}
          label='Checked end'
          labelPlacement='end'
          size='small'
          circle
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CustomTextField
          label='User Name'
          enableValidation
          error='error'
          value='sdfas'
          helperText='error'
        />
        <CustomTextField
          label='User Name'
          enableValidation
          value='sdfas'
          helperText='no error'
        />
        <CustomTextField />
      </div>
      <div>
        <br /><br />
        <CustomTextField
          labeltype='filter'
          size='small'
          label='User Name'
        />
      </div>
      <br />
      <br />
      <br />
      <div>
        <DateRangePickerInput title='Select Date' type='dateFilter' />
      </div>
    </div>
  )
}

export default CancelledGames
