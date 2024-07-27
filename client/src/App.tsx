import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListEntry from './components/listEntry/ListEntry';
import CreateBar from './components/createBar/CreateBar';
import ProductEntry from './components/productEntry/ProductEntry';
import CardLayout from './components/layouts/cardLayout/CardLayout';
import EntitiesRender from './components/utilities/entitiesRender/EntitiesRender';
import Btn from './components/common/button/Btn';
import { handleProductCheck } from './components/utilities/ProductCheck';


const products = [
  { id: 1, name: 'Mléko', listId: 1 },
  { id: 2, name: 'Chleba', listId: 1 },
  { id: 3, name: 'Máslo', listId: 1 },
  { id: 4, name: 'Piškoty', listId: 2 },
  { id: 5, name: 'Zelí', listId: 2 },
  { id: 6, name: 'Brambory', listId: 3 },
];

const lists = [
  { id: 1, name: 'Pondělí' },
  { id: 2, name: 'Tesco' },
  { id: 3, name: 'Babička' },
  { id: 4, name: 'Soused' },

];


type Product = {
  id: number;
  name: string;
  listId: number;
  isChecked: boolean;
};

type List = {
  id: number;
  name: string;
};


function App() {

  const [isEditModeList, setIsEditModeList] = useState<boolean>(false);
  const [isEditModeProduct, setIsEditModeProduct] = useState<boolean>(false);
  const [selectedListId, setSelectedListId] = useState<number | null>(null);
  const [productStates, setProductStates] = useState<Record<number, boolean>>(
    products.reduce((acc, product) => ({ ...acc, [product.id]: false }), {})
  );


  /*useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/lists');
        setListsState(response.data);
      } catch (error) {
        console.error('Failed to fetch lists', error);
      }
    };

    fetchLists();
  }, []);
*/

  const handleViewList = (listId: number) => {
    setSelectedListId(listId);
  };


  const filteredProducts = products.filter(product => product.listId === selectedListId);

  const isListCompleted = (listId: number) => {
    const listProducts = products.filter(product => product.listId === listId);
    return listProducts.length > 0 && listProducts.every((product) => productStates[product.id]);
  };


  const handleToggleEditModeList = () => {
    setIsEditModeList(!isEditModeList);
  };

  const handleToggleEditModeProduct = () => {
    setIsEditModeProduct(!isEditModeProduct);
  };


  const getSelectedListName = () => {
    const selectedList = lists.find(list => list.id === selectedListId);
    return selectedList ? selectedList.name : 'Select a list';
  };

  /*const handleCreateList = async (name: string) => {
    try {
      const response = await axios.post('http://localhost:3001/api/lists', { name });
      setListsState(prevLists => [...prevLists, response.data]);
    } catch (error) {
      console.error('Failed to create list', error);
    }
  };*/




  const TopComponentLists: React.FC = () => <CreateBar content="Create" placeholder='List name...' type='text' value='' onCreate={() => {}} />;
  const CenterComponentLists: React.FC = () => <EntitiesRender entities={lists} EntryComponent={({ id, name }) => (
    <ListEntry
      id={id}
      name={name}
      isCompleted={isListCompleted(id)}
      onEntryClick={handleViewList}
      isEditModeList={isEditModeList}
    />
  )} onEntryClick={handleViewList} />
  const BottomComponentLists: React.FC = () => <Btn content="Edit Lists" type={isEditModeList ? 'red' : 'green'} onClick={handleToggleEditModeList} />;

  const TopComponentProductList: React.FC = () => <CreateBar content="Add" placeholder='Product name...' type='text' value='' onCreate={() => { }} />;
  const CenterComponentProductList: React.FC = () => (
    <EntitiesRender
      entities={filteredProducts}
      EntryComponent={({ id, name }) => (
        <ProductEntry
          id={id}
          name={name}
          isChecked={productStates[id]}
          isEditModeProduct={isEditModeProduct}
          onCheck={() => handleProductCheck(id, productStates, setProductStates)}
        />
      )}
    />);
  const BottomComponentProductList: React.FC = () => <Btn content="Edit Products" type={isEditModeProduct ? 'red' : 'green'} onClick={handleToggleEditModeProduct} />;


  return (
    <div className='app-container'>
      <h4 className='title'>Shopping List</h4>
      <div className='main-section'>
        <CardLayout title='Your Lists' top={TopComponentLists} center={CenterComponentLists} bottom={BottomComponentLists} />
        {selectedListId && (
          <div className='card-section'>
            <CardLayout title={getSelectedListName()} top={TopComponentProductList} center={CenterComponentProductList} bottom={BottomComponentProductList} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
