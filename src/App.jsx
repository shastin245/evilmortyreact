import { useState } from 'react'
import Navbar from './components/Navbar'
import List from './components/List'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div className='container'>
        <List></List>
      </div>
    </div>
  )
}

export default App
