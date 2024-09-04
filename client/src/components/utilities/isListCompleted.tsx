import { List } from './Types';

  
  type ListProductStates = Record<string, Record<string, boolean>>;


export const isListCompleted = (listId: string, lists: List[], listProductStates: ListProductStates): boolean => {
    const list = lists.find(list => list.id === listId);
  
    if (!list) {
      console.log(`List with ID ${listId} not found.`);
      return false;
    }
  
    const productStatesForList = listProductStates[listId] || {};
  
    if (list.products.length === 0) {
      return false;
    }
  
    console.log('Product States for List:', productStatesForList);
  
    const allProductsChecked = list.products.every(product => productStatesForList[product.id] === true);
  
    console.log(`List ID: ${list.id}, List Name: ${list.name}, Is Completed: ${allProductsChecked}`);
  
    return allProductsChecked;
  };