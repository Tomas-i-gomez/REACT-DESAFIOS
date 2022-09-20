import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './Cards.css'

function Cards(props) {  
    let { price, title, img, detail } = props;
      return (
        <div className="card">
          <div className="card-img">
            <img src={img} alt="card img"></img>
          </div>
          <div className="card-detail">
            <h3>{title}</h3>
            <p>{detail}</p>
            <h4>$ {price}</h4>
            <ItemCount initial={1}  stock={5}/>
          </div>
        </div>
      );
    }


export default Cards