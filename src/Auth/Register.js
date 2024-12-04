import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa';
import FormWrapper from '../components/shared/FormWrapper';
import InputField from '../components/shared/InputField';
import Button from '../components/shared/Button';

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
  });

  const [errorMessage , setErrorMessage] = useState('');
  const [successMessage , setSuccessMessage] = useState('');

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
      setSuccessMessage('')
      return;
    }
    console.log('Register data:', formData);
    setErrorMessage('')
    setSuccessMessage('Registration successfully');
    setFormData({
      fullname: '',
      email: '',
      username: '',
      password: '',
      });
  };

  return (
    <FormWrapper title="Create an Account">
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
      {setSuccessMessage && <p className='text-green-400 text-sm font'>{successMessage}</p>}
    </FormWrapper>
  );
};

export default Register;
