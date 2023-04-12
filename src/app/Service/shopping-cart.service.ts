import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shoppingCartItems: any[] = [];
  public search = new BehaviorSubject<string>("");

  constructor() {}

  addProduct = (product) => {
    let items = this.get_shoppingCartItems();
    if (items) {
      items.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(items));
    } else {
      this.shoppingCartItems.push(product);
      localStorage.setItem(
        'shopping_cart',
        JSON.stringify(this.shoppingCartItems)
      );
    }
    // console.log('added', product);
    // localStorage.setItem('shopping_cart', JSON.stringify(product));
  };

  get_shoppingCartItems = () => {
    let items = localStorage.getItem('shopping_cart');
    return JSON.parse(items);
  };

  getCartLength = () => {
    let items = this.get_shoppingCartItems();
    return items ? this.get_shoppingCartItems().length : 0;
  };

  getTotal = () => {
    let items = this.get_shoppingCartItems();
    return items?.reduce((acc, item) => acc + item.price, 0);
  };

  deletedItem = (prod) => {
    console.log('calling remover ', prod);
    let items = this.get_shoppingCartItems();

    const index = items.findIndex((item) => item.id == prod.id);
    if (index >= 0) {
      console.log('hitting if');
      items.splice(index, 1);
      return localStorage.setItem('shopping_cart', JSON.stringify(items));
    }
  };
}
