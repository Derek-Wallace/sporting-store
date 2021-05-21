import { ProxyState } from "../AppState.js";



export class ItemsController{
  constructor(){
    ProxyState.on('items', this.drawItem)
    ProxyState.on('cart', this.drawCart)
    this.drawItem()
  }

  drawItem(){
    let template = ''
    ProxyState.items.forEach(item =>{
      template += /*html*/ `
      <div class=" col-3 my-3">
                  <div class="card">
                      <div class="card-img"><img src="${item.img}" class="img-fluid" alt=""></div>
                      <div class="card-body">
                          <h5>${item.name}</h5>
                          <p><b>$${item.price.toFixed(2)}</b></p>
                          <p>${item.description}</p>
                          <p>stock: ${item.stock} <button class="btn btn-info" onclick="app.itemsController.addtoCart('${item.id}')">Add to Cart</button></p>
                      </div>
                  </div>
              </div>
      `
    })
    document.getElementById("item").innerHTML = template
  }

addtoCart(itemId){
  let item = ProxyState.items.find(item => item.id == itemId)
  ProxyState.cart.push(item)
  console.log("added to cart", item)
}

drawCart(){
  let template = ''
  let total = ProxyState.total
  ProxyState.cart.forEach(item => {
    total += item.price
    template += /*html*/ `
    <img src="${item.img}" class = "img-fluid"/>
    <h5>${item.name}</h5>
    <p>$${item.price.toFixed(2)}</p>
    `
  })
  document.getElementById("cart").innerHTML = template
  document.getElementById("total").innerHTML = `<h4>$${total.toFixed(2)}</h4>`
}

checkout(){
  let total = ProxyState.total
  ProxyState.cart.forEach(item =>{
    total += item.price
  })
  ProxyState.money -= total
  ProxyState.cart = []
  ProxyState.cart = ProxyState.cart
}
  
}