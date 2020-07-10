import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodItemListComponent } from './components/food-item-list/food-item-list.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  {path: '', component: FoodItemListComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
