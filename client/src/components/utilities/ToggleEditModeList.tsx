import { Dispatch, SetStateAction } from 'react';


const handleToggleEditModeList = (isEditModeList: boolean, setIsEditModeList: Dispatch<SetStateAction<boolean>>) => {
  setIsEditModeList(!isEditModeList);
};

export default handleToggleEditModeList;