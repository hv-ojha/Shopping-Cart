import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from 'src/app/model/Food';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input() food:Food;
  @Output() addItemToCart: EventEmitter<Food> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementQty(food:Food) {
    this.addItemToCart.emit(food);
  }

}
