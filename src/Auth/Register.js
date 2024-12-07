import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { Link } from 'react-router-dom';
import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa';
import FormWrapper from '../components/shared/FormWrapper';
import InputField from '../components/shared/InputField';
import Button from '../components/shared/Button';
import ShowToast from '../components/shared/ShowToast';
import useForms from '../Hooks/useForms';

const Register = () => {

  const {formData , handleChange , resetForm} = useForms({
    fullname: '',
    email: '',
    username: '',
    password: '',
  })
  const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{5,}$/;

  const handleSubmit = (e) =>{
    e.preventDefault()

    if (!validateForm()) 
      return;
      console.log("Login data:", formData);
      resetForm();
      ShowToast('registered succesfully' , 'success')
  }

  const validateForm = () => {
    if( !formData.fullname || !formData.email || !formData.username || !formData.password ){
      ShowToast('please fill all fields' , 'error')
      return false;
    }
    if( !passwordRegex.test(formData.password) ){
      ShowToast('password must be at least 5 characters and contain at least one special character','error')
      return false;
    }
      return true;
  }

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
