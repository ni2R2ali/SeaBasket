import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from '../Service/shopping-cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css'],
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products: any[];
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();

  constructor(public shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    console.log('products ', this.checkout_products);
  }

  deleteItem(prod) {
    // console.log('item removed');
    this.shoppingCartService.deletedItem(prod);
    this.deleteEvent.emit(prod)
  }
}
