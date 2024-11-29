import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>LoginPage
        <p>Dont have account <Link to={'/register'} >register here</Link></p>
    </div>
  )
}

export default LoginPage