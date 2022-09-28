import React , { useEffect,useState } from 'react'
import{getSingleItem} from '../../DataBase/dataBase.js';
// import ItemDetail from './ItemDetail.jsx';

function ItemDetailContainer(props) {
    let [data, setData] = useState({});

  useEffect(
    () => {
    getSingleItem().then((data) => {
      setData(data);
    });
  },
  [],
  );


  return (
    <div className="main container">
                {/* <ItemDetail item = {data}/> */}
        {/* Card Detail */}
        <h1>{data.title}</h1>
        <div>{data.img}</div>
        <h3>{data.detail}</h3>
    </div>
  )
}

export default ItemDetailContainer