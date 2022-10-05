const data = [
    {
    id: 1,
    title: "Producto 1",
    price: "$736.53",
    detail: "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes.",
    stock: 1,
    img:"https://img.freepik.com/vector-gratis/venta-carrito-compras-completo-pictograma-rojo_1284-8505.jpg?w=2000",
    category: "Paquetes"
  }, {
    id: 2,
    title: "Producto 2",
    price: "$979.92",
    detail: "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    stock: 3,
    img:"https://st2.depositphotos.com/1114422/5830/v/450/depositphotos_58300529-stock-illustration-check-out-icon-symbol.jpg",
    category: "Integraciones"
  }, {
    id: 3,
    title: "Producto 3",
    price: "$894.07",
    detail: "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    stock: 3,
    img:"https://cdn-icons-png.flaticon.com/512/107/107831.png",
    category: "Paquetes"
  }, {
    id: 4,
    title: "Producto 4",
    price: "$128.14",
    detail: "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    stock: 2,
    img:"https://st2.depositphotos.com/1114422/5830/v/450/depositphotos_58300529-stock-illustration-check-out-icon-symbol.jpg",
    category: "Integraciones"
  }, {
    id: 5,
    title: "Producto 5",
    price: "$150.55",
    detail: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    stock: 5,
    img: "https://img.freepik.com/vector-gratis/venta-carrito-compras-completo-pictograma-rojo_1284-8505.jpg?w=2000",
    category: "Paquetes"
  }]


export function getItems() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => { resolve(data);},
        1500);
    })
    }   

 export function getSingleItem(idItem) {
      return new Promise ((resolve, reject) => {
        let itemFind = data.find((item)=> {
          return item.id === parseInt(idItem) 
        });

        if (itemFind) resolve(itemFind);
        else reject(new Error("Item no encontrado"));
          // setTimeout(() => { resolve(data[2]);},
          // 1500);
      })
      }   


      export function getItemsByCategory(cat) {
        return new Promise ((resolve, reject) => {
          let itemFind = data.filter((item)=> {
            return item.category === cat; 
          });
  
          if (itemFind) resolve(itemFind);
          else reject(new Error("Item no encontrado"));
            // setTimeout(() => { resolve(data[2]);},
            // 1500);
        })
        }   
