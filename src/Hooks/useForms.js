import { useState } from 'react';

const useForms = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error when input is corrected
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const validate = (fields) => {
    const newErrors = {};
    for (const [field, message] of Object.entries(fields)) {
      if (!formData[field]) {
        newErrors[field] = message;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
  };

  return { formData, handleChange, resetForm, validate, errors };
};

export default useForms;
