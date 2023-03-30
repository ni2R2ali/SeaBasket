import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../auth/product.model';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent implements OnInit {
  products: Product[];
  category: any;
  selectedCategoryId: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const categoryId = +this.route.snapshot.paramMap.get('category');
    if (categoryId) {
      this.products = this.productService.getProductsByCategory(categoryId);
    } else {
      this.products = this.productService.getProducts();
    }
  }
}
