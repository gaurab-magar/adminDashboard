import React,{useState} from 'react'
import FormWrapper from '../components/shared/FormWrapper'
import InputField from '../components/shared/InputField'
import Button from '../components/shared/Button'
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import ShowToast from '../components/shared/ShowToast';

const LoginPage = () => {
  const [formData, setFormData] = useState({ 
    username: "",
    password: "" 
  });
  const [errorMessage, setErrorMessage] = useState('');

  const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{5,}$/;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ 
      ...prevFormData, 
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setErrorMessage('All fields are required.');
      ShowToast('please fill all fields' , 'error')
      return;
     }
     if (!passwordRegex.test(formData.password)) {
      setErrorMessage('Password must be at least 5 characters long and include at least one special character.');
      return;
    }
    console.log("Login data:", formData);

    setFormData({
      username: "",
      password: ""
    })

    setErrorMessage('');
    ShowToast('login succesfully' , 'success')
  };

  return (
    <FormWrapper title='Welcome Back'>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <InputField type='text' placeholder='Enter Your username' onChange={handleChange} name='username' label='username' Icon={FaUserAlt} value={formData.username} />
        <InputField type='password' placeholder='Enter Your password' onChange={handleChange} name='password' label='password' Icon={FaLock} value={formData.password} />
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
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
