import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Link } from 'react-router-dom';
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa';
import FormWrapper from '../components/shared/FormWrapper';
import InputField from '../components/shared/InputField';
import Button from '../components/shared/Button';
import ShowToast from '../components/shared/ShowToast';

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
  });

  const [errorMessage , setErrorMessage] = useState('');
  const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{5,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullname || !formData.email || !formData.username || !formData.password) {
      setErrorMessage('Please fill all fields');
      ShowToast('All fields are required', 'error');
      return;
    }
    if (!passwordRegex.test(formData.password)) {
      setErrorMessage('Password must be at least 5 characters long and include at least one special character.');
      return;
    }
    console.log('Register data:', formData);
    setErrorMessage('')
    setFormData({
      fullname: '',
      email: '',
      username: '',
      password: '',
      });
    ShowToast('registered successfully','success')
  };

  return (
    <FormWrapper title="Create an Account">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          name="fullname"
          label="Full Name"
          Icon={FaUserAlt}
          value={formData.fullname}
        />
        <InputField
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          label="Email"
          Icon={FaEnvelope}
          value={formData.email}
        />
        <InputField
          type="text"
          placeholder="Username"
          onChange={handleChange}
          name="username"
          label="Username"
          Icon={FaUserAlt}
          value={formData.username}
        />
        <InputField
          type="password"
          placeholder="Password"
          onChange={handleChange}
          name="password"
          label="Password"
          Icon={FaLock}
          value={formData.password}
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        >
          Register
        </Button>
      </form>
      <p className="text-center text-gray-500 text-sm mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </FormWrapper>
  );
};

export default Register;
