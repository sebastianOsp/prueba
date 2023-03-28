import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContactUs } from './contactUs/contactUs'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactUs />
  </React.StrictMode>,
)
