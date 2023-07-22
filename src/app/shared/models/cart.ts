import { CartItem } from "./cartitem";

export class Cart {
  items: CartItem[] = [];
  totalPrice: number = 0;
  totalCount: number = 0;

  get TotalPrice(): number {
    let totalPrice: number = 0;
    this.items.forEach((item: CartItem) => {
      totalPrice += item.totalPrice;
    });
    return totalPrice;
  }

  get TotalCount(): number {
    let totalCount: number = 0;
    this.items.forEach((item: CartItem) => {
      totalCount += item.quantity;
    });
    return totalCount;
  }
}