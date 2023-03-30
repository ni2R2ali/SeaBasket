import { Injectable } from '@angular/core';
import { Category } from '../auth/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [
    {
      id: 1,
      name: 'Electronics',
      description: 'Shop for the latest electronics.',
      imageUrl: 'https://www.example.com/electronics.jpg'
    },
    {
      id: 2,
      name: 'Home & Garden',
      description: 'Make your house a home with our selection of home and garden products.',
      imageUrl: 'https://www.example.com/home-and-garden.jpg'
    },
    {
      id: 3,
      name: 'Toys & Games',
      description: 'Find the perfect toy or game for your child.',
      imageUrl: 'https://www.example.com/toys-and-games.jpg'
    }
  ];

  constructor() { }

  getCategories(): Category[] {
    return this.categories;
  }

  getCategory(id: number): Category {
    return this.categories.find(category => category.id === id);
  }
}
