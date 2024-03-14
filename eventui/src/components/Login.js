// Login.js
import React, { useState } from 'react'
import { loginUser } from './api'

const Login = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [showErrorMessage, setErrorMessage] = useState('')
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleLogin = async e => {
    e.preventDefault()
    try {
      const response = await loginUser(formData)
      console.log('User logged in successfully:', response)
      localStorage.setItem('access_token', response.access)
      setLoggedIn(true)
    } catch (error) {
      console.error('Login failed:', error)
      setErrorMessage(error)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type='submit'>Login</button>
        {showErrorMessage && <p>Try Again</p>}
      </form>
    </div>
  )
}

export default Login
