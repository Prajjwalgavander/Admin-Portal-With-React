import CustomButton from './index'

export default {
  title: 'atoms/Button',
  args: {
    disable: false
  }
}

export const Default = ({ disable }) => {
  return (
    <>
      <div>
        <h2>Small</h2>
        <CustomButton
          sx={{ marginRight: '50px' }}
          variant='outlined'
          size='small'
          disabled={disable}
        >
          Outlined Button
        </CustomButton>

        <CustomButton variant='text' size='small' disabled={disable}>
          Text Button
        </CustomButton>
      </div>

      <div>
        <h2>Medium</h2>
        <CustomButton
          sx={{ marginRight: '50px' }}
          variant='outlined'
          size='medium'
          disabled={disable}
        >
          Outlined Button
        </CustomButton>

        <CustomButton variant='text' size='medium' disabled={disable}>
          Text Button
        </CustomButton>
      </div>

      <div>
        <h2>Large</h2>
        <CustomButton
          sx={{ marginRight: '50px' }}
          variant='outlined'
          size='large'
          disabled={disable}
        >
          Outlined Button
        </CustomButton>

        <CustomButton variant='text' size='large' disabled={disable}>
          Text Button
        </CustomButton>
      </div>
    </>
  )
}
