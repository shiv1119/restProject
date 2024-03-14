import React, { useState } from 'react'
import Login from './Login'
import './Navbar.css'
import Register from './Register'
import Logout from './logout'
import AddEventForm from './AddEvent'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    // <div>
    //   {!loggedIn ? (
    //     <>
    //       <Register />
    //       <Login setLoggedIn={setLoggedIn} />
    //     </>
    //   ) : (
    //     <>
    //       <AddEventForm />
    //       <Logout setLoggedIn={setLoggedIn} />
    //     </>
    //   )}
    // </div>
    <Router>
      <div>
        <nav className='navbar'>
          <div>eventbrite</div>
          <div>Search</div>
          <div>
            <div>
              {loggedIn && (
                <p>
                  <Link to='/addevent'>Host an Event</Link>
                </p>
              )}
            </div>
            <div>Help</div>
            <div className='main-right-navs-div'>
              {!loggedIn ? (
                <div className='right-navs'>
                  <Link to='/register'>Register</Link>
                  {/* <Login setLoggedIn={setLoggedIn} /> */}
                  <Link to='/login'>Login</Link>
                </div>
              ) : (
                <div>
                  <Logout setLoggedIn={setLoggedIn} />
                </div>
              )}
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path='/addevent' element={<AddEventForm />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Navbar
