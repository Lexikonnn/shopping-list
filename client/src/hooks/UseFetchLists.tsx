import axios from 'axios';



 type Product = {
    id: string;
    name: string;
    listId: string;
    isChecked: boolean;
  };
  

 type List = {
    id: string;
    name: string;
    completed: boolean;
    products: Product[];
  };



export const fetchLists = async (
    setLists: React.Dispatch<React.SetStateAction<List[]>>,
    setProductStates: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
    setListProductStates: React.Dispatch<React.SetStateAction<Record<string, Record<string, boolean>>>>
  ) => {
    try {
      const response = await axios.get('http://localhost:3000/lists');
      console.log('Fetched data:', response.data);
  
      const fetchedLists = response.data.map((item: any) => ({
        id: item._id,
        name: item.name,
        completed: item.completed,
        products: item.products.map((product: any) => ({
          id: product._id,
          name: product.name,
          listId: item._id,
          isChecked: false
        }))
      }));
      setLists(fetchedLists);
  
      const productsState = fetchedLists.flatMap((list: List) => list.products).reduce((acc: Record<string, boolean>, product: Product) => ({
        ...acc,
        [product.id]: product.isChecked
      }), {});
      setProductStates(productsState);
  
      const listProductStatesMap = fetchedLists.reduce((acc: { [listId: string]: Record<string, boolean> }, list: List) => {
        acc[list.id] = list.products.reduce((productAcc: Record<string, boolean>, product: Product) => ({
          ...productAcc,
          [product.id]: product.isChecked
        }), {});
        return acc;
      }, {});
      setListProductStates(listProductStatesMap);
  
    } catch (error) {
      console.error('Failed to fetch lists', error);
    }
  };