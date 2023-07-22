import { Foods } from "../food";

export class CartItem {
  quantity: number = 1;
  price: number = 0;

  constructor(public food: Foods) { 
    this.price = food.price;
  }
  
  get totalPrice(): number {
    return this.price * this.quantity;
  } 
}