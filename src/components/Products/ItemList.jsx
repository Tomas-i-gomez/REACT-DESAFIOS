import React from 'react'
import Card from './Cards'
import getItems from '../../DataBase/dataBase.js'

function ItemList(props) {
let itemList = props.item
  return (
    <div className='main'>
        {
        itemList.map((item) => {
          return <Card 
          key={item.id}
          title={item.title}
          price={item.price}
          detail={item.detail}
          img={item.img}>
          </Card>
        })
      }
    </div>
  )
}

export default ItemList;