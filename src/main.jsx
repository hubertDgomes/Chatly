import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import firebaseConfig from '../firebase.config.js'
import store from './store'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
      <App />
    </StrictMode>
    </Provider>
  </BrowserRouter>
)
