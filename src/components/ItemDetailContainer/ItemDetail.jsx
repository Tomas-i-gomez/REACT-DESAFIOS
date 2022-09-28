import React from 'react'

function ItemDetail(props) {
    // let itemDetail = props.item
  return (
    <div item= {data}>
         {/* Card Detail */}
         <h1>{data.title}</h1>
         <div className="card-img">
            <img src={img} alt="card img"></img>
          </div>
        <h3>{data.detail}</h3>
//     </div>
  )
}

export default ItemDetail;