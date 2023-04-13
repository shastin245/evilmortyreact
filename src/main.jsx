import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="fatimamonterola.us.auth0.com"
    clientId="uZtshNtSQSoIuA75aGZ5jK790yalaGIo"
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>
)
