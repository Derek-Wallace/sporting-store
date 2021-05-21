import { ProxyState } from "../AppState.js";
import { moneyServices } from "../Services/MoneyServices.js";

export class MoneyController{
  constructor(){
    ProxyState.on("money", this.drawMoney)
    this.drawMoney()
  }

  drawMoney(){
    document.getElementById("money").innerHTML = `Money: $${ProxyState.money.toFixed(2)}`
  }

  addMoney(){
    moneyServices.addMoney()
  }
}