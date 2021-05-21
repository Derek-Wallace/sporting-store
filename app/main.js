import { ItemsController } from "./Controllers/ItemsController.js";
import { MoneyController } from "./Controllers/MoneyController.js";


class App {
itemsController = new ItemsController()
moneyController = new MoneyController()
}

window["app"] = new App();
