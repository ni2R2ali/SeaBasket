import { Component } from '@angular/core';
import { ShoppingCartService } from '../Service/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public shoppingCart: ShoppingCartService){}

}
