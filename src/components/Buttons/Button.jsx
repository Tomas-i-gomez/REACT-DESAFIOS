import React, {useState} from 'react'
import './Button.css'

function Button(props) {
let [color, setColor] = useState("blue")

function handleClick() {
    props.onClick();
    setColor("lightblue")}

  return (
    <button onClick={handleClick}
    style={{backgroundColor: color}}
    className="button"
    >
    {props.children}
    </button>
  )
}

export default Button;