import './App.css'
import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:8000/send', { email, number })
    } catch (error) {
      alert('Error While Sending Email')
      console.log(error)
    }
  }
  return (
    <div style={{}}>
      <div style={{ margin: '10px' }}>
        <input style={{ padding: "10px", fontSize: '1rem', outline: 'none' }} type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div style={{ margin: '10px' }}>
        <input style={{ padding: "10px", fontSize: '1rem', outline: 'none' }} type="text" placeholder='Enter Number' value={number} onChange={(e) => setNumber(e.target.value)} />
      </div>
      <div style={{ margin: '10px' }}>
        <button style={{ padding: "10px", fontSize: '1rem' }} onClick={handleClick}>Start</button>
      </div>
    </div >
  )
}

export default App
