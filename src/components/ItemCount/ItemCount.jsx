import React from 'react'
import Button from '../Buttons/Button';

function ItemCount(props) {
    const [count, setCount] = React.useState(props.initial)
    const [stock, setStock] = React.useState(props.stock)
    
    
    function handleAdd(){
    if (count < stock) {
        setCount(count+1)  
    }
    }

    function handleRemove(){
        if (count > 1) {
            setCount(count - 1)
        }
        
    }

    function onAddToCart() {
        
    }

  return (
    <div>
        <Button onClick={handleRemove}> - </Button>
        <span> {count} </span>
        <Button onClick={handleAdd}> + </Button>
        <br />
        <br />
        <Button> Agregar al Carrito </Button>
    </div>
  )
}

export default ItemCount