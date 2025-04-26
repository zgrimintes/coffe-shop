import { Injectable, signal } from '@angular/core';
import { Coffee } from '../_Models/Coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  coffeeList = signal( [
    {
      name: 'Espresso',
      description: 'Strong and bold coffee brewed by forcing hot water through finely-ground coffee beans.',
      price: 3.00,
      image: 'assets/espresso.jpg'
    },
    {
      name: 'Latte',
      description: 'Smooth and creamy coffee made with espresso and steamed milk, topped with a light layer of foam.',
      price: 4.50,
      image: 'assets/latte.jpg'
    },
    {
      name: 'Cappuccino',
      description: 'Rich and frothy coffee made with equal parts espresso, steamed milk, and milk foam.',
      price: 4.00,
      image: 'assets/cappuccino.jpg'
    },
    {
      name: 'Americano',
      description: 'Bold coffee made by diluting espresso with hot water for a smooth and rich flavor.',
      price: 3.50,
      image: 'assets/americano.jpg'
    },
    {
      name: 'Ciapuccino',
      description: 'TBA.',
      price: 4.00,
      image: 'assets/ciapuccino.jpg'
    },
  ]) 

  orderList = signal<Coffee[]>([]);

  constructor() { }

  addToCart(coffee: Coffee) {
    if (this.orderList()[0]?.name === 'Order placed!') 
      this.orderList.set([]);

    this.orderList.set([...this.orderList(), coffee]);
  }

  order() {
    this.orderList.set([
      {
        name: 'Order placed!',
        description: 'Thank you for your order.',
        price: 0.00,
        image: 'assets/placeholder.jpg'
      },
    ]);
  }

}
