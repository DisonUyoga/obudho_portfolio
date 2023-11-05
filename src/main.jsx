import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ToastContainer} from 'react-toastify'
import "remixicon/fonts/remixicon.css";
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <>
  <ToastContainer
    position="top-right"
    autoClose={3000}
    closeOnClick
    pauseOnHover
    theme="dark"
    >
    </ToastContainer>
    <App />
    </>
  </React.StrictMode>
)
