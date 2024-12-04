import React,{useState} from 'react'
import FormWrapper from '../components/shared/FormWrapper'
import InputField from '../components/shared/InputField'
import Button from '../components/shared/Button'
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [formData, setFormData] = useState({ 
    username: "",
    password: "" 
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
      setSuccessMessage('');
      return;
     }
    console.log("Login data:", formData);

    setFormData({
      username: "",
      password: ""
    })

    setErrorMessage('');
    setSuccessMessage('your data has been sent succcessfully');
  };

  return (
    <FormWrapper title='Welcome Back'>
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
        {setSuccessMessage && <p className='text-green-400 text-sm font'>{successMessage}</p>}
    </FormWrapper>
  )
}

export default LoginPage
