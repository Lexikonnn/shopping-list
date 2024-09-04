import axios from 'axios';
import { List } from './Types';

type NewList = {
    name: string;
    completed: boolean;
    products: any[];
};

export const createNewList = async (listName: string, setLists: React.Dispatch<React.SetStateAction<List[]>>) => {


    const newList: NewList = { name: listName, completed: false, products: [] };
    console.log('Sending POST request with data:', newList);


    axios.post('http://localhost:3000/lists', newList, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => console.log(response.data[0].name))
    .catch((error) => console.error(error.response.data));
};
