import * as yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const useLoginController = ({
  loginLoading,
  operatorLogin
}) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const loginSchema = yup.object({
    username: yup
      .string()
      .label(t('username'))
      .min(4, (props) => t('mustbeAtleast4Characters', { ...props, minNumber: 4 }))
      .max(32, (props) => t('cannotExceed32Characters', { ...props, maxNumber: 32 }))
      .required((props) => t('isRequired', props)),
    password: yup
      .string()
      .label(t('password'))
      .min(4, (props) => t('mustbeAtleast4Characters', { ...props, minNumber: 4 }))
      .max(32, (props) => t('cannotExceed32Characters', { ...props, maxNumber: 32 }))
      .required((props) => t('isRequired', props))
  })

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: loginSchema,
    onSubmit: async ({ username, password }) => {
      operatorLogin({
        username,
        password,
        navigate
      })
    }
  })

  return {
    handleSubmit,
    values,
    handleChange,
    errors,
    t
  }
}
