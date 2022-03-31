import { styled } from '@mui/material'

export const PieChartContainer = styled('div')(({ theme }) => ({
  display: 'block',
  height: '460px',
  width: '460px',
  padding: '20px',
  margin: 'auto'
}))

export const ChartContainer = styled('div')(({ theme }) => ({
  maxWidth: '96%',
  margin: 'auto'
}))

export const HorizontalLine = styled('hr')(({ theme }) => ({
  width: '100px'
}))
