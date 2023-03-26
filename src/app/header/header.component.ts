import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { ShoppingCartService } from '../Service/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    public shoppingCart: ShoppingCartService,
    public auth: AuthService
  ) {}

  signOut() {
    this.auth.logOut();
  }
}
