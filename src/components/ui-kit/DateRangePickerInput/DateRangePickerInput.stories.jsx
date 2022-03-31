import DateRangePickerInput from './index'

export default {
  title: 'atoms/DateRangePicker',
  args: {
    title: 'Select Date',
    type: 'default'
  },
  argTypes: {
    type: {
      type: 'select',
      options: ['default', 'dateFilter']
    }
  }

}

export const Default = ({ title, type }) => {
  return (
    <DateRangePickerInput title={title} type={type} />
  )
}
