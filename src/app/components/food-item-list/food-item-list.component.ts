import { Component, OnInit } from '@angular/core';
import { Food } from '../../model/Food';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-food-item-list',
  templateUrl: './food-item-list.component.html',
  styleUrls: ['./food-item-list.component.css']
})
export class FoodItemListComponent implements OnInit {
  foodItems:Food[];

  constructor(private scService:ShoppingCartService) { }

  ngOnInit(): void {
    this.foodItems = this.scService.getFoodItems();
  }

  addItemToCart(food:Food) {
    console.log(food.name);
    this.scService.addItemToCart(food);
  }

}
