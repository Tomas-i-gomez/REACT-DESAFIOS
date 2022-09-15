import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown}  from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <FontAwesomeIcon icon={faCartArrowDown}  className= "white" />
  )
}

export default CartWidget;

