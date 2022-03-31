import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import reportWebVitals from 'reportWebVitals'
import 'assets/translation'
import { appRoot } from 'assets/dom/domNodes'
import { Provider } from 'react-redux'
import { theme } from 'theme/theme'
import { ThemeProvider } from '@mui/material'
import { store } from 'redux-thunk/store'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  appRoot
)

export default store

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
