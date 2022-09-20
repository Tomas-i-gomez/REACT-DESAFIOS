import React from 'react'

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
        <button onClick={handleAdd}> + </button>
        <span> {count} </span>
        <button onClick={handleRemove}> - </button>
        <button> Agregar al Carrito </button>
    </div>
  )
}

export default ItemCount