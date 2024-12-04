import React from 'react'

const InputField = ({type ,placeholder , name  , value , onChange, Icon , label}) => {
  return (
    <div className='mb-4'>
        {label && <label className='mb-2 block text-gray-600 font-medium'>{label}</label>}
        <div className="flex items-center border rounded-lg px-3 py-2">
            {Icon && <Icon className='text-gray-500' />}   
            <input placeholder={placeholder} type={type} value={value} name={name} onChange={onChange} className='w-full px-2 py-1 text-gray-700 outline-none border-none' />         
        </div>
    </div>
  )
}

export default InputField