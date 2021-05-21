import { Item } from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
items = [
  new Item("test", 200, "this item is cool", 5, "https://www.shift4shop.com/2015/images/sell-online/digital-downloads/sporting-goods.png"),
  new Item("test2", 500, "this item is cooler", 5, "https://www.shift4shop.com/2015/images/sell-online/digital-downloads/sporting-goods.png")
]

cart = []

money = 0
total = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
