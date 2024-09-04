
export type Product = {
    id: string;
    name: string;
    listId: string;
    isChecked: boolean;
  };
  

  export type List = {
    id: string;
    name: string;
    completed: boolean;
    products: Product[];
  };
  