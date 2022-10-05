import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './Cards.css'

function Cards(props) {  
    let { price, title, img, detail, id} = props;

    const urlDetail = `/item/${id}`
      return (
        <div className="card main">
          <div className="card-img">
            <img src={img} alt="card img"></img>
          </div>
          <div className="card-detail">
            <h3>{title}</h3>
            <p>{detail}</p>
            <h4>{price}</h4>
            <Link to={urlDetail}> Ver más </Link>

          </div>
        </div>
      );
    }


export default Cards