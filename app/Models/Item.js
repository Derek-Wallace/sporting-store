import { generateId } from "../Utils/GenerateId.js"

export class Item{
  constructor(name, price, description, stock, img, id){
    this.id = id || generateId()
    this.name = name
    this.price = price
    this.description = description
    this.stock = stock
    this.img = img
  }
}