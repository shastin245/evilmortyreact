import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LoginButton from './components/Login'
import Profile from './components/Profile'
import LogoutButton from './components/Logout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LoginButton></LoginButton>
      <Profile></Profile>
      <LogoutButton></LogoutButton>
    </div>
  )
}

export default App
