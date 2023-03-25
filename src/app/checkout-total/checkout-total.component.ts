import { Component } from '@angular/core';
import { ShoppingCartService } from '../Service/shopping-cart.service';

@Component({
  selector: 'app-checkout-total',
  templateUrl: './checkout-total.component.html',
  styleUrls: ['./checkout-total.component.css'],
})
export class CheckoutTotalComponent {
  constructor(public shoppingCart: ShoppingCartService) {}
}
