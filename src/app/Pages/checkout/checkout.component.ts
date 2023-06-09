import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  items: any[];

  constructor(public shopping_cart: ShoppingCartService, public auth: AuthService) {}

  ngOnInit(): void {
    this.getShoppingCart();
  }

  getShoppingCart() {
    this.items = this.shopping_cart.get_shoppingCartItems();
  }

  deleteEventHandler(prod) {
    console.log('event handler');
    this.getShoppingCart();
  }
}
