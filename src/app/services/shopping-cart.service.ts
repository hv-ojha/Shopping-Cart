import { Injectable } from '@angular/core';
import { Food } from '../model/Food';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartItems: Map<Food, number> = new Map();

  constructor() { }

  getFoodItems() {
    return [
      {
        id: '1',
        name: 'Cabbage'
      },
      {
        id: '2',
        name: 'Mango'
      },
      {
        id: '3',
        name: 'Banana',
      }
    ]
  }

  addItemToCart(food:Food) {
    if(this.cartItems.has(food)) {
      this.cartItems.set(food,this.cartItems.get(food) + 1);
    } else {
      this.cartItems.set(food, 1);
    }
  }

  getTotalItemInCart() : number {
    let count = 0;
    this.cartItems.forEach((item) => {
      count += item;
    })
    return count;
  }

  decreaseItemInCart(food:Food) {
    if(this.cartItems.has(food)) {
      if(this.cartItems.get(food) == 1) {
        this.cartItems.delete(food);
      } else {
        this.cartItems.set(food,this.cartItems.get(food) - 1);
      }
    }
  }
}
