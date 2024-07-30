import { Dispatch, SetStateAction } from 'react';


const handleViewList = (listId: string, setSelectedListId: Dispatch<SetStateAction<string | null>>) => {
  setSelectedListId(listId);
};

  export default handleViewList;