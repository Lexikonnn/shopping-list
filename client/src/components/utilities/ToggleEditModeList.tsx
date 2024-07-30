import { Dispatch, SetStateAction } from 'react';

// Function to toggle edit mode for lists
const handleToggleEditModeList = (isEditModeList: boolean, setIsEditModeList: Dispatch<SetStateAction<boolean>>) => {
  setIsEditModeList(!isEditModeList);
};

export default handleToggleEditModeList;