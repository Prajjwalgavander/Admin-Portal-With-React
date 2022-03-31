import * as yup from 'yup'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'

export const useChangePasswordController = ({
  updatePasswordLoading,
  updatePassword
}) => {
  const { t } = useTranslation()

  const changePasswordSchema = yup.object({
    currentPassword: yup
      .string()
      .label(t('currentPassword'))
      .min(4, (props) => t('mustbeAtleast4Characters', { ...props, minNumber: 4 }))
      .max(32, (props) => t('cannotExceed32Characters', { ...props, maxNumber: 32 }))
      .required((props) => t('isRequired', props)),
    newPassword: yup
      .string()
      .label(t('newPassword'))
      .min(4, (props) => t('mustbeAtleast4Characters', { ...props, minNumber: 4 }))
      .max(32, (props) => t('cannotExceed32Characters', { ...props, maxNumber: 32 }))
      .required((props) => t('isRequired', props)),
    confirmPassword: yup
      .string()
      .label(t('confirmPassword'))
      .min(4, (props) => t('mustbeAtleast4Characters', { ...props, minNumber: 4 }))
      .max(32, (props) => t('cannotExceed32Characters', { ...props, maxNumber: 32 }))
      .required((props) => t('isRequired', props))
      .oneOf([yup.ref('newPassword'), null], t('passwordsMustMatch'))
  })

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: changePasswordSchema,
    onSubmit: async ({ currentPassword, newPassword, confirmPassword }) => {
      updatePassword({ oldPassword: currentPassword, newPassword })
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
