import { Component, Input } from '@angular/core';
import { ShoppingCartService } from '../Service/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  @Input() products: any[];

  constructor(private shopping_cart: ShoppingCartService) {}

  addToCart(prod) {
    // console.log('added to cart');
    this.shopping_cart.addProduct(prod)
  }
}
