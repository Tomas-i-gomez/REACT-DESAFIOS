import React, {useEffect, useState} from 'react'
import {getSingleItem} from '../../DataBase/dataBase.js';
import ItemDetail from './ItemDetail.jsx';
import {useParams} from 'react-router-dom';

function ItemDetailContainer(props) {
  const [data, setData] = useState({});

  const {id} = useParams();

  useEffect(
    () => {
      getSingleItem(id).then((data) => setData(data));
    },[id]);

  return (
    <div className="main container">
      <ItemDetail item={data}/>
    </div>
  )
}

export default ItemDetailContainer