import { Fragment } from 'react'
import CustomTypography from './index'

export default {
  title: 'atoms/Typography'
}

export const Default = () => {
  const variants = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'srOnly',
    'inherit'
  ].reverse()

  return (
    variants.map((variant) => (
      <Fragment key={variant}>
        <CustomTypography key={variant} variant={variant} value={`This is ${variant} variant`} />
        <br />
        <br />
      </Fragment>
    ))
  )
}
