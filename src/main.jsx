import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { EmployeeProvider } from './components/contexts/context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </React.StrictMode>,
)
