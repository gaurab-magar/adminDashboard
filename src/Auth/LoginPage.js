import React,{useState} from 'react'
import FormWrapper from '../components/shared/FormWrapper'
import InputField from '../components/shared/InputField'
import Button from '../components/shared/Button'
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'

const LoginPage = () => {
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
    <FormWrapper title='Welcome Back'>
      <form onSubmit={handleSubmit}>
        <InputField type='text' placeholder='Enter Your username' onChange={handleChange} name='username' label='username' Icon={FaUserAlt} />
        <InputField type='password' placeholder='Enter Your password' onChange={handleChange} name='password' label='password' Icon={FaLock} />
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          Login
        </Button>
      </form>
        <p className="text-center text-gray-500 text-sm mt-4">
          Don't have an account? <Link to='/register' className="text-blue-600 hover:underline">Sign Up</Link>
        </p>
    </FormWrapper>
  )
}

export default LoginPage