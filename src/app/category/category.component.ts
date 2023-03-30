import { Component, OnInit } from '@angular/core';
import { Category } from '../auth/category.model';
import { CategoryService } from '../Service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }
}
