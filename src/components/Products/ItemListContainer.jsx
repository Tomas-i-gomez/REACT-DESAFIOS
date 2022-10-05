import React, {useState , useEffect} from 'react'
import Card from './Cards'
import {getItems, getItemsByCategory } from '../../DataBase/dataBase.js'
import ItemList from './ItemList';
import {useParams } from 'react-router-dom';

// * ciclos de vida
// * promesas
// * estado
// * props
// * map
// * key

function ItemListContainer(props) {
let [data, setData] = useState([]);

const {cat} = useParams();


  useEffect(() => {
    if (cat === undefined) {
    getItems().then((data) => setData(data));
  }
  else {
    getItemsByCategory(cat).then((data) => setData(data));
  }
},[cat],);


  return (
    <div>
    <h1>{props.greeting}</h1>
    <div className="main container">
    <ItemList item= {data}/>
    </div>
  </div>
  )
}

export default ItemListContainer;