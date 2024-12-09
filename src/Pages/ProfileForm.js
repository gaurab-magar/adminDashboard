import React from 'react'
import InputField from '../components/shared/InputField'
import useForms from '../Hooks/useForms'
import Button from '../components/shared/Button'

const ProfileForm = () => {

    const{formData , handleChange, resetForm} =useForms({
        fullname : "",
        phoneNumber: "",
        email: "",
        password: ""        
    })

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log('Form submitted' , formData)
        resetForm();   
    }
  return (
    <div className="bg-white max-w-full mx-auto mt-10 p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Profile Form</h2>
         <div className="my-4">
            <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField label='fullname' placeholder='Enter Your fullname' type='text' name='fullname' value={formData.fullname} onChange={handleChange} />
                        <InputField label='phone Number' placeholder='Enter Your phone number' type='number' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} />
                        <InputField label='email' placeholder='Enter Your email' type='text' name='email' value={formData.email} onChange={handleChange} />
                        <InputField label='password' placeholder='Enter Your password' type='text' name='password' value={formData.password} onChange={handleChange} />
                    </div>
                    <div className="flex justify-center md:justify-end space-x-4">
                        <Button type='button' className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400'>Cancel</Button>
                        <Button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700">Submit</Button>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default ProfileForm