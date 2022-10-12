import React from 'react'
import Button from '../Buttons/Button';

function ItemCount({initial, stockParent, onAddToCart}) {
  const [count, setCount] = React.useState(initial)
  const [stock, setStock] = React.useState(stockParent); //¡Ojo con esto! El stock es externo desde el padre, no es un estado.


  function handleAdd() {
    if (count < stock) {
      console.log("ok");
      setCount(count + 1)
    }
  }

  function handleRemove() {
    console.log("ok");
    if (count > 1) {
      setCount(count - 1)
    }

  }


  return (
    <div>
      <Button onClick={handleRemove}> - </Button>
      <span> {count} </span>
      <Button onClick={handleAdd}> + </Button>
      <br/>
      <br/>
      <Button onClick={() => {
        onAddToCart(count)
      }}> Agregar al Carrito </Button>
    </div>
  )
}

export default ItemCount