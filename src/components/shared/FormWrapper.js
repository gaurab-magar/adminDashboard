import React from 'react'

const FormWrapper = ({title,children}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">{title}</h2>
            {children}
        </div>
    </div>
  )
}

export default FormWrapper