import React from 'react';
import './ListEntry.css';
import Btn from '../common/button/Btn';
import InputField from '../common/inputField/InputField';

type ListEntryProps = {
  id: number;
  name: string;
  isCompleted?: boolean;
  onEntryClick?: (listId: number) => void;
  isEditModeList: boolean;
};

const ListEntry: React.FC<ListEntryProps> = ({
  id,
  name,
  isCompleted = false, // default value to avoid undefined
  onEntryClick,
  isEditModeList
}) => {

  const handleClick = () => {
    if (onEntryClick) {
      onEntryClick(id);
    }
  };

  return (
    <div className={`list-container ${isCompleted ? 'completed' : ''}`}>
      <div className='list-wrapper'>
        {isEditModeList ? (
          <InputField 
            placeholder='Name' 
            value={name} 
            type='text' 
          />
        ) : (
          <h4 className='card-title'>{name}</h4>
        )}
      </div>
      <div className='list-wrapper'>
        <Btn
          content={isCompleted ? 'Completed' : isEditModeList ? 'Delete' : 'View'}
          type={isCompleted ? 'outline' : isEditModeList ? 'red' : 'green'}
          onClick={isEditModeList ? () => {/* Handle delete logic here if needed */} : handleClick}
        />
      </div>
    </div>
  );
};

export default ListEntry;