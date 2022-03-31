import TestRenderer from 'react-test-renderer'
import CustomTable from 'components/ui-kit/Table'
import { ThemeProvider } from '@mui/material'
import { theme } from 'theme/theme'

describe('Component - CustomTable', () => {
  const tableHeader = [
    {
      id: 1,
      label: 'Product',
      value: 'product',
      type: 'product',
      isMobFullWidRow: true
    },
    {
      id: 2,
      label: 'Purchased On',
      value: 'purchased_on',
      type: 'date',
      isMobileColumn: true
    },
    {
      id: 3,
      label: 'Buyer',
      value: 'buyer',
      type: 'buyer',
      isMobileColumn: true
    },
    {
      id: 4,
      label: 'Price',
      value: 'price',
      type: 'price',
      isMobileColumn: true
    },
    {
      id: 5,
      label: 'Due By',
      value: 'due_by',
      type: 'date'
    },
    {
      id: 6,
      label: 'Payment date',
      value: 'payment_date',
      type: 'paymentDate'
    },
    {
      id: 8,
      label: 'Status',
      value: 'status',
      type: 'status'
    },
    {
      id: 9,
      label: 'Switch',
      value: 'switch',
      type: 'switch'
    }
  ]

  const tableRows = [
    {
      id: 1,
      product: 'product',
      purchased_on: 'Sept 15, 12:56 PM',
      buyer: 'Ada Reynolds',
      price: '$89',
      due_by: '11-11-2020',
      incomingMessage: 1,
      payment_date: '11-11-2020',
      reviews: 4,
      status: true,
      switch: {
        switchValue: false
      }
    },
    {
      id: 2,
      product: '7 Figure Funnel Strategy by a Sales',
      purchased_on: 'Sept 15, 12:56 PM',
      buyer: 'Ada Reynolds',
      price: '$89',
      due_by: '11-11-2020',
      payment_date: '11-11-2020',
      reviews: 4,
      status: false,
      switch: {
        switchValue: true
      }
    },
    {
      id: 3,
      product: '7 Figure Funnel Strategy by a Sales',
      purchased_on: 'Sept 15, 12:56 PM',
      buyer: 'Ada Reynolds',
      price: '$89',
      due_by: '11-11-2020',
      payment_date: '11-11-2020',
      reviews: 4,
      status: true,
      switch: {
        switchValue: false
      }
    },
    {
      id: 4,
      product: '7 Figure Funnel Strategy by a Sales',
      purchased_on: 'Sept 15, 12:56 PM',
      buyer: 'Ada Reynolds',
      price: '$89',
      due_by: '11-11-2020',
      payment_date: '11-11-2020',
      reviews: 4,
      status: false,
      switch: {
        switchValue: true
      }
    }
  ]

  const TableJSX = ({
    type,
    rows,
    header,
    currentPage,
    totalPages,
    onPageChange
  }) => {
    return (
      <ThemeProvider theme={theme}>
        <CustomTable
          rows={rows}
          header={header}
          currentPage={currentPage}
          totalPage={totalPages}
          onPageChange={onPageChange}
          type={type}
        />
      </ThemeProvider>
    )
  }

  const wrapper1 = TestRenderer.create(<TableJSX header={tableHeader} row={tableRows} />)
  const wrapper2 = TestRenderer.create(
    <TableJSX header={tableHeader} row={tableRows} type='static' />
  )
  const wrapper3 = TestRenderer.create(
    <TableJSX
      header={tableHeader}
      row={tableRows}
      currentPage={1}
      totalPage={2}
      onPageChange={() => {}}
    />
  )
  const wrapper4 = TestRenderer.create(<TableJSX header={tableHeader} row={tableRows} type='static' />)

  it('renders Table with default variant correctly', () => {
    expect(wrapper1).toMatchSnapshot()
  })

  it('renders Table with static variant correctly', () => {
    expect(wrapper2).toMatchSnapshot()
  })

  it('renders Table with pagination correctly', () => {
    expect(wrapper3).toMatchSnapshot()
  })

  it('renders Table without pagination correctly', () => {
    expect(wrapper4).toMatchSnapshot()
  })
})
