import { useState } from 'react';
import { validate } from './validate';

const useForm = (setEditing, details) => {

    const [values, setValues] = useState(details);

    const [errors, setErrors] = useState('');

    const handleInputChange = e => {
        const {name, value, checked} = e.target;
        
        if (name === 'status') {
            setValues({...values, [name]: checked});
            return;
        }

        setValues({ ...values, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values, setEditing, details.id))
       
    }

    return [values, handleInputChange, handleSubmit, errors]
}

export default useForm;