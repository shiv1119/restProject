// Register.js
import React, { useState } from 'react'
import { registerUser } from './api'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [showSuccessMessage, setSuccessMessage] = useState(false)
  const [errors, setErrors] = useState('')

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await registerUser(formData)
      console.log('User registered successfully:', response)
      setSuccessMessage(true)
      // Redirect or show a success message
    } catch (error) {
      console.error('Registration failed:', error)
      setErrors()
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={formData.username}
          onChange={handleChange}
          required
        />
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
        <button type='submit'>Register</button>
      </form>
      {showSuccessMessage && <p>Registration Successfull, Now Try Login</p>}
      {errors && <p> Try Again</p>}
    </div>
  )
}

export default Register
