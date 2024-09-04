import React, { useState, useEffect } from 'react';
import ListEntry from './components/listEntry/ListEntry';
import CreateBar from './components/createBar/CreateBar';
import ProductEntry from './components/productEntry/ProductEntry';
import CardLayout from './components/layouts/cardLayout/CardLayout';
import EntitiesRender from './components/utilities/entitiesRender/EntitiesRender';
import Btn from './components/common/button/Btn';
import { handleProductCheck } from './components/utilities/ProductCheck';
import { isListCompleted } from './components/utilities/isListCompleted';
import { fetchLists } from './hooks/UseFetchLists';
import { List } from './components/utilities/Types';
import { handleCreateListClick } from './components/utilities/CreateListClick';
import  handleViewList  from './components/utilities/ViewList';
import handleToggleEditModeList from './components/utilities/ToggleEditModeList';
import getSelectedListName from './components/utilities/GetSelectedListName';
import getFilteredProducts from './components/utilities/FilteredProducts';


function App() {
  const [isEditModeList, setIsEditModeList] = useState<boolean>(false);
  const [isEditModeProduct, setIsEditModeProduct] = useState<boolean>(false);
  const [selectedListId, setSelectedListId] = useState<string | null>(null);
  const [productStates, setProductStates] = useState<Record<string, boolean>>({});
  const [lists, setLists] = useState<List[]>([]);
  const [listProductStates, setListProductStates] = useState<Record<string, Record<string, boolean>>>({});

  useEffect(() => {
    fetchLists(setLists, setProductStates, setListProductStates);
  }, []);

  const filteredProducts = getFilteredProducts(lists, selectedListId);

  const handleProductCheckWrapper = (listId: string, productId: string) => {
    handleProductCheck(
      listId,
      productId,
      productStates,
      setProductStates,
      setListProductStates
    );
  };

  const TopComponentLists: React.FC = () => <CreateBar content="Create" placeholder='List name...' type='text' value='' onCreate={(name) => handleCreateListClick(name, setLists)} />;
  const CenterComponentLists: React.FC = () => (
    <EntitiesRender
      entities={lists}
      EntryComponent={({ id, name }) => (
        <ListEntry
          id={id}
          name={name}
          isCompleted={isListCompleted(id, lists, listProductStates)}
          onEntryClick={() => handleViewList(id, setSelectedListId)}
          isEditModeList={isEditModeList}
        />
      )}
      onEntryClick={(id) => handleViewList(id, setSelectedListId)}
    />
  );
  const BottomComponentLists: React.FC = () => <Btn content={isEditModeList ? 'Done' : 'Edit List'} type='green' onClick={() => handleToggleEditModeList(isEditModeList, setIsEditModeList)} />;

  const TopComponentProduct: React.FC = () => <CreateBar content="Add" placeholder='Product name...' type='text' value='' onCreate={() => { }} />;
  const CenterComponentProduct: React.FC = () => (
    <EntitiesRender
      entities={filteredProducts}
      EntryComponent={({ id, name }) => (
        <ProductEntry
          id={id}
          name={name}
          isChecked={productStates[id] || false}
          isEditModeProduct={isEditModeProduct}
          onCheck={() => handleProductCheckWrapper(selectedListId || '', id)}
        />
      )}
    />
  );
  const BottomComponentProduct: React.FC = () => <Btn content={isEditModeProduct ? 'Done' : 'Edit Products'} type='green' onClick={() => handleToggleEditModeList(isEditModeProduct, setIsEditModeProduct)} />;

  return (
    <div className='app-container'>
      <h4 className='title'>Shopping List</h4>
      <div className='main-section'>
        <CardLayout title='Your Lists' top={TopComponentLists} center={CenterComponentLists} bottom={BottomComponentLists} />
        {selectedListId && (
          <div className='card-section'>
            <CardLayout title={getSelectedListName(lists, selectedListId)} top={TopComponentProduct} center={CenterComponentProduct} bottom={BottomComponentProduct} />
          </div>
        )}
      </div>
    </div>
  );
}
export default App;