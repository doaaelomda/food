import { Foods } from "../food";

export class CartItem{
  constructor(public food:Foods){ 
    this.food=food;
  }
  quantity:number = 1 ;
  get price():Number{
    return this.food.price * this.quantity
  }
}