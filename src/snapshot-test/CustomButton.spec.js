import TestRenderer from 'react-test-renderer'
import CustomButton from 'components/ui-kit/Button'
import { ProfileIcon } from 'components/ui-kit/icons/iconComponents/ProfileIcon'

describe('Component - CustomButton', () => {
  const wrappers = []
  const ButtonJSX = ({
    variant,
    color,
    size,
    disabled,
    onClick,
    startIcon,
    endIcon
  }) => {
    return (
      <CustomButton
        variant={variant}
        color={color}
        size={size}
        disabled={disabled}
        onClick={onClick}
        startIcon={startIcon}
        endIcon={endIcon}
      >
        Sample Button
      </CustomButton>
    )
  }

  const variants = ['outlined', 'contained', 'text']
  const sizes = ['small', 'large', 'medium']

  variants.forEach(variant => (
    wrappers.push(TestRenderer.create(
      <ButtonJSX variant={variant} />
    ).toJSON())
  ))
  sizes.forEach(size => (
    wrappers.push(TestRenderer.create(
      <ButtonJSX size={size} />
    ).toJSON())
  ))
  wrappers.push(TestRenderer.create(
    <ButtonJSX disabled />
  ).toJSON())
  wrappers.push(TestRenderer.create(
    <ButtonJSX color='#F59E0B' />
  ).toJSON())
  wrappers.push(TestRenderer.create(
    <ButtonJSX startIcon={<ProfileIcon />} />
  ))
  wrappers.push(TestRenderer.create(
    <ButtonJSX endIcon={<ProfileIcon />} />
  ).toJSON())
  wrappers.push(TestRenderer.create(
    <ButtonJSX onClick={() => {}} />
  ).toJSON())

  it('renders all buttons correctly', () => {
    wrappers.forEach(wrapper => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
