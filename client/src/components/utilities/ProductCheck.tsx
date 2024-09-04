
export const handleProductCheck = (
  listId: string,
  productId: string,
  productStates: Record<string, boolean>,
  setProductStates: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
  setListProductStates: React.Dispatch<React.SetStateAction<Record<string, Record<string, boolean>>>>
) => {

  setProductStates(prevState => ({
    ...prevState,
    [productId]: !prevState[productId] 
  }));

 
  setListProductStates(prevState => ({
    ...prevState,
    [listId]: {
      ...prevState[listId],
      [productId]: !prevState[listId]?.[productId] 
    }
  }));
};

