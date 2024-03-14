// AddEventForm.js
import React, { useState } from 'react'
import axios from 'axios'

function AddEventForm () {
  const [formData, setFormData] = useState({
    event_name: '',
    date: '',
    time: '',
    location: '',
    image: null
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:8000/api/addevent/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
        }
      )
      console.log('Event added successfully:', response.data)
      setFormData({
        event_name: '',
        date: '',
        time: '',
        location: '',
        image: null
      })
    } catch (error) {
      console.error('Error adding event:', error.response.data)
      console.log(localStorage)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='event_name'
        placeholder='Event Name'
        value={formData.event_name}
        onChange={handleChange}
        required
      />
      <input
        type='date'
        name='date'
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type='time'
        name='time'
        value={formData.time}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='location'
        placeholder='Location'
        value={formData.location}
        onChange={handleChange}
        required
      />
      <input
        type='file'
        name='image'
        onChange={e => setFormData({ ...formData, image: e.target.files[0] })}
        required
      />
      <button type='submit'>Add Event</button>
    </form>
  )
}

export default AddEventForm
