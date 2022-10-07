import React from 'react'
import Button from '../Buttons/Button';

function ItemCount(props, {onAddToCart}) {
    const [count, setCount] = React.useState(props.initial)
    const [stock, setStock] = React.useState(props.stock)


    function handleAdd(){
    if (count < stock) {
        console.log("ok");
        setCount(count+1)  
    }
    }

    function handleRemove(){
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
        <br />
        <br />
        <Button onClick={ ()=> {onAddToCart(count)} }> Agregar al Carrito </Button>
    </div>
  )
}

export default ItemCount