
import React from 'react';
import './InputField.css';

type TypeInput = {
    type: string;
    value: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<TypeInput> = ({ type, value, placeholder, onChange }) => {
    return (
        <input
            className='input-field'
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
}

export default InputField;
