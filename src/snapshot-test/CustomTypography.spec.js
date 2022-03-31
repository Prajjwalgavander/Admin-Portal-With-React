import TestRenderer from 'react-test-renderer'
import CustomTypography from 'components/ui-kit/Typography'

describe('Component - CustomTypography', () => {
  const wrappers = []
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
  ]
  const TypoGraphyJSX = ({ variant }) => (
    <CustomTypography value='This is h1 variant' variant={variant} />
  )

  variants.map((variant) => (
    wrappers.push(TestRenderer.create(
      <TypoGraphyJSX variant={variant} />
    ).toJSON())
  ))

  it('renders CustomTypography all variants correctly', () => {
    wrappers.forEach(wrapper => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
