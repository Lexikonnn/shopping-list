
export const handleProductCheck = (
  listId: string,
  productId: string,
  productStates: Record<string, boolean>,
  setProductStates: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
  setListProductStates: React.Dispatch<React.SetStateAction<Record<string, Record<string, boolean>>>>
) => {
  // Update the product state
  setProductStates(prevState => ({
    ...prevState,
    [productId]: !prevState[productId] // Toggle the product check state
  }));

  // Update listProductStates
  setListProductStates(prevState => ({
    ...prevState,
    [listId]: {
      ...prevState[listId],
      [productId]: !prevState[listId]?.[productId] // Toggle the product check state
    }
  }));
};

