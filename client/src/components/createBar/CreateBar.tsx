import React, { useState } from 'react';
import Btn from '../common/button/Btn';
import InputField from '../common/inputField/InputField';

import './CreateBar.css';

type TypeBar = {
    placeholder: string;
    value: string;
    type: string;
    content: string;
    onCreate: (name: string) => void;
}

const CreateBar: React.FC<TypeBar> = (props) => {
    const [inputValue, setInputValue] = useState<string>(props.value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        if (inputValue.trim()) {
            props.onCreate(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <div className="createbar-container">
            <InputField placeholder={props.placeholder} value={inputValue} type={props.type} onChange={handleChange} />
            <Btn content={props.content} type='green' onClick={handleClick} />
        </div>
    );
}

export default CreateBar;
