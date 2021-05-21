import { ProxyState } from "../AppState.js";

class MoneyServices{
  addMoney(){
    ProxyState.money += 100
    ProxyState.money = ProxyState.money
  }
}

export const moneyServices = new MoneyServices