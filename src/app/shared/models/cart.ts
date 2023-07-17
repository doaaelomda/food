import { CartItem } from './cartitem';

export class Cart{
  items:CartItem[] = [];
  
  get totalPrice(){
    let totalPrice= 0;
    this.items.forEach(item=>{
      totalPrice += item.price.valueOf();
    })
    return totalPrice

  }
  totalCount:number = 0;
}