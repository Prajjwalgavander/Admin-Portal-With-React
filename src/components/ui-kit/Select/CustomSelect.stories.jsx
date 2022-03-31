import CustomSelect from './index'

export default {
  title: 'atoms/Select',
  args: {
    value: '12',
    disable: false,
    handleChange: () => {}
  }
}

export const Default = ({ value, handleChange, disable }) => {
  const items = [
    {
      id: 1,
      label: 'India',
      value: '12'
    },
    {
      id: 2,
      label: 'Australia',
      value: '13'
    },
    {
      id: 3,
      label: 'Japan',
      value: '15'
    },
    {
      id: 4,
      label: 'England',
      value: '17'
    }
  ]

  return (
    <>
      <h2>Filter Select</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '900px' }}>
        <CustomSelect
          value={12}
          onChange={handleChange}
          items={items}
          labeltype='filter'
          label='Styled Option'
          disabled={disable}
        />

        <CustomSelect
          value={12}
          onChange={handleChange}
          items={items}
          labeltype='filter'
          label='Non Styled Options'
          styled={false}
          disabled={disable}
        />
      </div>

      <h2>Default Select</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '900px' }}>
        <CustomSelect
          value={12}
          onChange={handleChange}
          items={items}
          label='Styled Option'
          disabled={disable}
        />
        <CustomSelect
          value={12}
          onChange={handleChange}
          items={items}
          label='Non Styled Options'
          styled={false}
          disabled={disable}
        />
      </div>

    </>
  )
}
