import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import FormWrapper from '../components/shared/FormWrapper';
import InputField from '../components/shared/InputField';
import Button from '../components/shared/Button';

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };
  return (
    <FormWrapper title='Create an Account'>
      <form onSubmit={handleSubmit}>
        <InputField type='text' placeholder='FullName' onChange={handleChange} name='username' label='username' Icon={FaUserAlt} />
        <InputField type='password' placeholder='Email' onChange={handleChange} name='password' label='password' Icon={FaEnvelope} />
        <InputField type='text' placeholder='username' onChange={handleChange} name='username' label='username' Icon={FaUserAlt} />
        <InputField type='password' placeholder='password' onChange={handleChange} name='password' label='password' Icon={FaLock} />
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          Register
        </Button>
      </form>
      <p className="text-center text-gray-500 text-sm mt-4">
          Already have an account? <Link to='/login' className="text-blue-600 hover:underline">Login</Link>
        </p>
    </FormWrapper>
  )
}

export default Register 