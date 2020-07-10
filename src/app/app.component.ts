import { Component,OnChanges } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping-cart';

  constructor(private scService: ShoppingCartService) { }

  totalItemInCart() {
    return this.scService.getTotalItemInCart(); 
  }
}
