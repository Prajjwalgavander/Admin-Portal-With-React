import { Grid } from '@mui/material'
import CustomTypography from 'components/ui-kit/Typography'
import { colors } from './index'

export default {
  title: 'Colors/palleate'
}

const cell = {
  color: colors.red,
  width: 200,
  height: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  margin: 'auto',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 10px'
}

export const main = () => (
  <Grid container spacing={4}>
    {Object.keys(colors).map((colorKey) => (
      <Grid key={colorKey} item xs={3}>
        <div style={{ ...cell, backgroundColor: colors[colorKey] }} />
        <div style={{ textAlign: 'center' }}>
          <CustomTypography variant='h6' value={colorKey} />
        </div>
      </Grid>
    ))}
  </Grid>
)
