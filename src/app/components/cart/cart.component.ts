import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service'
import { Food } from 'src/app/model/Food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Map<Food, number>;

  constructor(private scService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartItems = this.scService.cartItems;
  }

  incrementQty(recipient : {key: Food, value:number}) {
    this.scService.addItemToCart(recipient.key);
  }

  decrementQty(recipient : {key: Food, value:number}) {
    this.scService.decreaseItemInCart(recipient.key);
  }

}
