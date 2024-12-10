import React from 'react'
import InputField from '../components/shared/InputField'
import Button from '../components/shared/Button';
import useForms from '../Hooks/useForms';
import { PiAddressBookLight } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { MdNumbers } from "react-icons/md";

const AddCompany = () => {

  const {formData , handleChange , resetForm} = useForms({
    address:'',
    contactNumber:'',
    email:'',
    name:'',
    description: '',
    estDate:'',
    regNo:''
  });

  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(formData);
    resetForm();
  }
  return (
    <div className="bg-white max-w-full mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">Add Company</h2>
      <div className="my-4">
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField type='text' placeholder='address' onChange={handleChange} name='address' label='Address' value={formData.address} Icon={PiAddressBookLight}/>
              <InputField type='text' placeholder='contactNumber' onChange={handleChange} name='contactNumber' label='contactNumber' value={formData.contactNumber} Icon={IoIosContact}/>
              <InputField type='text' placeholder='email' onChange={handleChange} name='email' label='email' value={formData.email} Icon={MdOutlineMail}/>
              <InputField type='text' placeholder='name' onChange={handleChange} name='name' label='name' value={formData.name} Icon={MdOutlineDriveFileRenameOutline}/>
              <InputField type='text' placeholder='description' onChange={handleChange} name='description' label='description' value={formData.description} Icon={CiCalendarDate}/>
              <InputField type='text' placeholder='estDate' onChange={handleChange} name='estDate' label='estDate' value={formData.estDate} Icon={CiCalendarDate}/>
              <InputField type='text' placeholder='regNo' onChange={handleChange} name='regNo' label='regNo' value={formData.regNo} Icon={MdNumbers}/>
            </div>
             <Button className='bg-sky-600 text-white flex-end' >submit</Button>
        </form>
      </div>
    </div>
  )
}

export default AddCompany