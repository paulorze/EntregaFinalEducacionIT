import './App.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './pages/router/AppRouter'
import { Provider } from 'react-redux'
import StoreRedux from './redux/store'

function App() {
  return (
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_GOOGLEAUTH_ID}
    >
      <Provider
        store={StoreRedux}
      >
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  )
}

export default App
