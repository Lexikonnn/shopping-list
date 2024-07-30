import { List } from './Types'; 


const getSelectedListName = (lists: List[], selectedListId: string | null): string => {
  const selectedList = lists.find(list => list.id === selectedListId);
  return selectedList ? selectedList.name : 'Select a list';
};

export default getSelectedListName;