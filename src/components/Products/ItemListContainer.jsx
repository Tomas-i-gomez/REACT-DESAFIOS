import React, {useState , useEffect} from 'react'
import Card from './Cards'
import getItems from '../../DataBase/dataBase.js'
import ItemList from './ItemList';

// * ciclos de vida
// * promesas
// * estado
// * props
// * map
// * key

function ItemListContainer(props) {
let [data, setData] = useState([]);

  useEffect(
    () => {
    getItems().then((data) => {
      setData(data);
    });
  },
  [],
  );


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