import React from 'react'
import { Link } from 'react-router-dom'

const Navlink = () => {
  return (
    <div className='flex flex-row '>
        <Link to={'/products'}>Products</Link>
        <Link to={'/category'}>Category</Link>
        <Link to={'/graph'}>Graphs</Link>
        <Link to={'/employee'}>Employer</Link>
        <Link to={'/history'}>History</Link>
    </div>
  )
}

export default Navlink