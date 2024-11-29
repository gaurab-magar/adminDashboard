import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>Products <Link className='underline' to={'/'}>Click here to navigate Dashboard page</Link> </div>
  )
}

export default Products