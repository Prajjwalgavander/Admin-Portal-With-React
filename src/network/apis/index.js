import axios from 'axios'
import { requestHandler, responseSuccessHandler, errorHandler } from '../interceptors'
import config from '../../config'
import { LOADER_HANDLER_TYPES, METHOD_TYPES } from 'utils/constants'

const clients = {}
const microServices = {}

const microServicesURLs = {
  // Add Multiple end-points here
  BASE_URL1: `${config.apiGateway.BASE_URL_1}`
}

const axiosClient = (baseUrl, config) => axios.create({
  baseURL: baseUrl,
  ...config
})

for (const key in microServicesURLs) {
  const axiosInstance = axiosClient(microServicesURLs[key], {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
  microServices[key] = key
  clients[key] = axiosInstance

  // Handle request process
  axiosInstance.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
  )
  // Handle response process
  axiosInstance.interceptors.response.use(
    (response) => responseSuccessHandler(response),
    (error) => errorHandler(error)
  )
}

const axiosInstanceService = (method, uri, data = {}, configs = {}) => {
  const {
    successMessage = null,
    server = microServices.BASE_URL1,
    headers = {},
    params = {},
    responseType = 'json',
    handlerEnabled = true, // Interceptors required or not
    loader = LOADER_HANDLER_TYPES.page
  } = configs

  const axiosConfig = {
    headers,
    params,
    handlerEnabled,
    loader
  }

  if (responseType) {
    axiosConfig.responseType = responseType
  }

  if (successMessage) {
    axiosConfig.successMessage = successMessage
  }

  return clients[server][method](
    uri,
    method === METHOD_TYPES.get || method === METHOD_TYPES.delete ? axiosConfig : data,
    axiosConfig
  )
}

export default axiosInstanceService
export { microServices }
