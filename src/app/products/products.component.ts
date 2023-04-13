import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../Service/shopping-cart.service';
import { ApiService } from '../Service/api.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() products: any[];

  public filterCategory: any;
  searchKey: string = '';
  items: any;

  constructor(
    private api: ApiService,
    private shoppingCart: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.api.getJson().subscribe((res) => {
      this.filterCategory = res;
      this.items.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });

    this.shoppingCart.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addToCart(prod) {
    // console.log('added to cart');
    this.shoppingCart.addProduct(prod);
  }

  selectProduct(product) {
    // console.log('product selected');
    // this.router.navigate(['product-detail', product.id]);

    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: product.id,
      },
      state: {
        item: product,
      },
    };
    this.router.navigate(['product-detail'], navigationExtras);
  }
}
