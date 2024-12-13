import React from 'react';
import InputField from '../components/shared/InputField';
import Button from '../components/shared/Button';
import useForms from '../Hooks/useForms';
import { PiAddressBookLight } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import { MdOutlineMail, MdOutlineDriveFileRenameOutline, MdNumbers, MdDescription } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";

const AddCompany = () => {
  const { formData, handleChange, resetForm } = useForms({
    address: '',
    contactNumber: '',
    email: '',
    name: '',
    description: '',
    estDate: '',
    regNo: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    resetForm();
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-white shadow-xl max-w-4xl mx-auto mt-10 p-8 rounded-xl">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-700 tracking-tight">Add Company</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField type='text' placeholder='Enter Address' onChange={handleChange} name='address' label='Address' value={formData.address} Icon={PiAddressBookLight} />
          <InputField type='tel' placeholder='Enter Contact Number' onChange={handleChange} name='contactNumber' label='Contact Number' value={formData.contactNumber} Icon={IoIosContact} />
          <InputField type='email' placeholder='Enter Email' onChange={handleChange} name='email' label='Email' value={formData.email} Icon={MdOutlineMail} />
          <InputField type='text' placeholder='Enter Company Name' onChange={handleChange} name='name' label='Company Name' value={formData.name} Icon={MdOutlineDriveFileRenameOutline} />
          <InputField type='date' onChange={handleChange} name='estDate' label='Establishment Date' value={formData.estDate} Icon={CiCalendarDate} />
          <InputField type='text' placeholder='Enter Registration Number' onChange={handleChange} name='regNo' label='Registration Number' value={formData.regNo} Icon={MdNumbers} />
        </div>
        <div>
          <label className="text-lg font-medium text-gray-700">
            <span>Description</span>
          </label>
          <div className="flex items-start border rounded-lg px-3 py-2 mt-2">
              <MdDescription className="mr-4 mt-2" />
              <textarea 
                name="description" 
                placeholder="Enter Description" 
                value={formData.description} 
                onChange={handleChange} 
                className="h-32 w-full px-2 py-2 text-gray-700 outline-none border-none sm:text-sm"
              />
          </div>
        </div>
        <div className="text-right">
          <Button type='submit' className='bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all'>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default AddCompany;