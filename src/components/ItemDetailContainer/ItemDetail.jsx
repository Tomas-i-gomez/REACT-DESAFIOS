import React from 'react'
import {getSingleItem} from '../../DataBase/dataBase';




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
     </div>
  )
}

export default ItemDetail;