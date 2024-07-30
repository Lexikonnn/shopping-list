import { createNewList } from './CreateNewList';
import {List} from './Types';

export const handleCreateListClick = async (listName: string, setLists: React.Dispatch<React.SetStateAction<List[]>>) => {
  try {
    await createNewList(listName, setLists);
  } catch (error) {
    console.error('Failed to create new list', error);
  }
};
