import { theme } from 'theme/theme'
import { ThemeProvider } from '@mui/material'
import TestRenderer from 'react-test-renderer'
import CustomSelect from 'components/ui-kit/Select'

describe('Component - CustomSelect', () => {
  const wrapper1 = []
  const CustomSelectJSX = ({
    label,
    error,
    items,
    value,
    labeltype,
    disabled,
    helperText
  }) => {
    return (
      <ThemeProvider theme={theme}>
        <CustomSelect
          error={error}
          label={label}
          onChange={() => {}}
          items={items}
          value={value}
          labeltype={labeltype}
          disabled={disabled}
          helperText={helperText}
          {...(value ? { value: value } : {})}
        />
      </ThemeProvider>
    )
  }

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

  wrapper1.push(
    TestRenderer.create(
      <CustomSelectJSX
        label='Select status'
        labeltype='default'
        items={items}
      />
    )
  )
  wrapper1.push(
    TestRenderer.create(
      <CustomSelectJSX label='Select status' labeltype='filter' items={items} />
    )
  )

  const wrapper2 = TestRenderer.create(
    <CustomSelectJSX
      label='Select status'
      labeltype='default'
      items={items}
      disabled
    />
  )

  const wrapper3 = TestRenderer.create(
    <CustomSelectJSX
      label='Select status'
      labeltype='default'
      items={items}
      value={13}
    />
  )

  const wrapper4 = TestRenderer.create(
    <CustomSelectJSX
      label='Select status'
      labeltype='filter'
      items={items}
      error
      helperText='is required'
    />
  )

  it('renders all custom select variants correctly', () => {
    wrapper1.forEach((wrapper) => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  it('renders custom select with disable state correctly', () => {
    expect(wrapper2).toMatchSnapshot()
  })

  it('renders custom select with selected value correctly', () => {
    expect(wrapper3).toMatchSnapshot()
  })

  it('renders custom select with error correctly', () => {
    expect(wrapper4).toMatchSnapshot()
  })
})
