// Logout.js
import React from 'react'

const Logout = ({ setLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('access_token')
    setLoggedIn(false)
    // Redirect or show a success message
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
