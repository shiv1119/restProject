// api.js
import axios from 'axios'

const API_URL = 'http://localhost:8000/api/'

export const registerUser = async userData => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/register/`,
      userData
    )
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const loginUser = async userData => {
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/login/`,
      userData
    )
    return response.data
  } catch (error) {
    throw error.response.data
  }
}
