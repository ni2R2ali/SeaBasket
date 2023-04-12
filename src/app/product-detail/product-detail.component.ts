import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ShoppingCartService } from '../Service/shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute, private router: Router, private shoppingCart: ShoppingCartService) {
    // console.log('extras ', this.router.getCurrentNavigation().extras.state.item)
    this.item = this.router.getCurrentNavigation().extras.state.item;
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    // console.log('id is: ', id);
    //http.get(product with id)
  }

  addToCart(prod) {
    this.shoppingCart.addProduct(prod);
  }
}
