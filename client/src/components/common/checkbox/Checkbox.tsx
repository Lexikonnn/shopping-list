import './Checkbox.css';
import React from 'react';

type CheckboxProps = {
  isChecked: boolean;
  onCheck: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, onCheck }) => {
  return (
    <label className='container'>
      <input type='checkbox' checked={isChecked} onChange={onCheck} />
      <span className='checkmark'></span>
    </label>
  );
};

export default Checkbox;
