import React, {useEffect, useState} from 'react'
import {getSingleItem} from '../../DataBase/dataBase';
import ItemCount from '../ItemCount/ItemCount';



function ItemDetail(props) {
    let itemDetail = props.item
  return (
    <div>
         {/* Card Detail */}
         <h1>{itemDetail.title}</h1>
         <div className="card-img">
            <img src={itemDetail.img} alt="card img"></img>
          </div>
        <h3>{itemDetail.detail}</h3>
        <ItemCount initial={1} stock={itemDetail.stock}/>
     </div>
  )
}

export default ItemDetail;