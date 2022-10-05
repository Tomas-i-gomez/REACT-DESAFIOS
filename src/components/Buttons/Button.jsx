import React, {useState} from 'react'
import './Button.css'

function Button(props) {
let [color, setColor] = useState("blue")

// function handleClick() {
//     setColor("lightblue")}

  return (
    <button onClick={props.onClick}
    style={{backgroundColor: color}}
    className="button"
    >
    {props.children}
    </button>
  )
}

export default Button;