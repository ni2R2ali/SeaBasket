import { Injectable } from '@angular/core';
import { Product } from '../auth/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Smartphone',
      description: 'A powerful smartphone with a large display.',
      price: 499.99,
      categoryId: 1,
      imageUrl: 'https://i.dummyjson.com/data/products/1/1.jpg'
    },
    {
      id: 2,
      name: 'Tablet',
      description: 'A versatile tablet with a long battery life.',
      price: 399.99,
      categoryId: 1,
      imageUrl: 'https://www.example.com/tablet.jpg'
    },
    {
      id: 3,
      name: 'Laptop',
      description: 'A high-performance laptop with a sleek design.',
      price: 999.99,
      categoryId: 1,
      imageUrl: 'https://www.example.com/laptop.jpg'
    },
    {
      id: 4,
      name: 'Coffee Maker',
      description: 'Brew a perfect cup of coffee with this coffee maker.',
      price: 49.99,
      categoryId: 2,
      imageUrl: 'https://www.example.com/coffee-maker.jpg'
    },
    {
      id: 5,
      name: 'Toaster',
      description: 'Make perfectly toasted bread with this toaster.',
      price: 29.99,
      categoryId: 2,
      imageUrl: 'https://www.example.com/toaster.jpg'
    },
    {
      id: 6,
      name: 'Robot Toy',
      description: 'A fun and interactive robot toy for kids.',
      price: 99.99,
      categoryId: 3,
      imageUrl: 'https://www.example.com/robot-toy.jpg'
    },
    {
      id: 7,
      name: 'Board Game',
      description: 'Enjoy hours of fun with this classic board game.',
      price: 19.99,
      categoryId: 3,
      imageUrl: 'https://www.example.com/board-game.jpg'
    }
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(product => product.id === id);
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }
}
