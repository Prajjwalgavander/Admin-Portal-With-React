import { TOKEN } from 'utils/constants'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

// 24 hour * 60 minutes of every hour
const COOKIE_EXPIRE_MIN = 24 * 60

export const getAuthToken = () => {
  return cookies.get(TOKEN)
}

export const setAuthToken = (authAccessToken) => {
  cookies.set(TOKEN, authAccessToken, {
    path: '/',
    expires: new Date((Date.now() + COOKIE_EXPIRE_MIN * 60 * 1000))
  })
}

export const removeAuthToken = () => {
  cookies.remove(TOKEN, { path: '/' })
}

export const signIn = ({ token }) => {
  setAuthToken(token)
}

export const signOut = () => {
  removeAuthToken()
}
