import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import {getSingleItem} from '../../DataBase/dataBase';
import ItemCount from '../ItemCount/ItemCount';


function ItemDetail(props) {
  let itemDetail = props.item
  let cartState = false;

  function handleAddToCart(count) {
    console.log("funciona")
    alert(`Agregaste ${count} productos al carrito!`)
  }

  return (
    <div>
      {/* Card Detail */}
      <h1>{itemDetail.title}</h1>
      <div className="card-img">
        <img src={itemDetail.img} alt="card img"></img>
      </div>
      <h2>{itemDetail.price}</h2>
      <h3>{itemDetail.detail}</h3>
      {cartState === false ? (
          <ItemCount initial={1} stockParent={5} onAddToCart={handleAddToCart}/>)
        : (
          <button><Link to='/cart'> Finalizar Compra </Link></button>)}
    </div>
  )
}

export default ItemDetail;