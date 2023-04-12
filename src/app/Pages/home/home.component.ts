import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Service/api.service';
import { ShoppingCartService } from 'src/app/Service/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: any;

  searchKey: string = '';

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.api.getJson().subscribe((resp) => {
      this.items = resp;
      // console.log('resp ', resp);
    });
  }

  opened = false;

  toggleSidebar() {
    this.opened = !this.opened;
  }
}
