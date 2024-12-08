import React from 'react'
import FormWrapper from '../components/shared/FormWrapper'
import InputField from '../components/shared/InputField'
import Button from '../components/shared/Button'
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import ShowToast from '../components/shared/ShowToast';
import useForms from '../Hooks/useForms';
import { useAuth } from '../Context/AuthContext';

const LoginPage = () => {
  const {login} = useAuth();
  const navigate = useNavigate();

  const {formData , handleChange , resetForm} = useForms({
    username: "",
    password: ""
  })
  const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{5,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) 
    return;
    login();
    navigate('/dashboard');
    console.log("Login data:", formData);
    resetForm();
    ShowToast('login succesfully' , 'success')
    };

  const validateForm = () =>{
    if (!formData.username || !formData.password) {
      ShowToast('please fill all fields' , 'error')
      return false;
      }
    if (!passwordRegex.test(formData.password)) {
      ShowToast('Password must be at least 5 characters long and include at least one special character', 'error');
      return false;
      }
      return true;
  }
  return (
    <FormWrapper title='Welcome Back'>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <InputField type='text' placeholder='Enter Your username' onChange={handleChange} name='username' label='username' Icon={FaUserAlt} value={formData.username} />
        <InputField type='password' placeholder='Enter Your password' onChange={handleChange} name='password' label='password' Icon={FaLock} value={formData.password} />
        <Button type='submit' className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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
