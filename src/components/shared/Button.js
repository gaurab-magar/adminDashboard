import React from 'react'

const Button = ({type = 'button',className,onClick,children}) => {
  return (
    <button type={type} onClick={onClick} className={`py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity ${className}`}>
        {children}
    </button>
  )
}

export default Button