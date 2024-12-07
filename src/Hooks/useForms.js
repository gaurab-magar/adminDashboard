import { useState } from 'react'

const useForms = (initialstate) => {
    const [formData , setFormData] = useState(initialstate);

    const handleChange =(e) =>{
        const {name , value} = e.target;
        setFormData((prevData)=>(
            {
                ...prevData,
                [name]:value
            }
        ))
    }
    const resetForm = () => setFormData(initialstate)
  return {formData , handleChange , resetForm}
}

export default useForms