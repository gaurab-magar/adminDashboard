import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>Register
              <p>Already have account <Link to={'/login'} >Login here</Link></p>
    </div>
  )
}

export default Register 