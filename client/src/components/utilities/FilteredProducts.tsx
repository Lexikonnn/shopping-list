import { List } from './Types';


const getFilteredProducts = (lists: List[], selectedListId: string | null) => {
  const selectedList = lists.find(list => list.id === selectedListId);
  return selectedList ? selectedList.products : [];
};

export default getFilteredProducts;