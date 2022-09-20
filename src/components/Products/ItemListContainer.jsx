import React from 'react'
import Card from './Cards'


function ItemListContainer(props) {
  return (
    <div>
    <h1>{props.greeting}</h1>
    <div className="main container">
        <Card
          price={100}
          title="Producto 1"
          detail="Lorem ipsum" 
          img="https://img.freepik.com/vector-gratis/venta-carrito-compras-completo-pictograma-rojo_1284-8505.jpg?w=2000"
          
        />
         <Card
          price={500}
          title="Producto 2"
          detail="Lorem ipsum"
          img="https://cdn-icons-png.flaticon.com/512/107/107831.png"
         
        />
        <Card
          price={1000}
          title="Producto 3"
          detail="Lorem ipsum"
          img="https://st2.depositphotos.com/1114422/5830/v/450/depositphotos_58300529-stock-illustration-check-out-icon-symbol.jpg"
         
        />
    </div>
  </div>
  )
}

export default ItemListContainer;