// Definice typu pro produkt
export type Product = {
    id: string;
    name: string;
    listId: string;
    isChecked: boolean;
  };
  
  // Definice typu pro seznam
  export type List = {
    id: string;
    name: string;
    completed: boolean;
    products: Product[];
  };
  