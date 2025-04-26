import { Component, input } from '@angular/core';
import { Coffee } from '../../_Models/Coffee';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.scss'
})
export class CoffeeCardComponent {
  coffee = input.required<Coffee>();

  addToCart() {
    console.log('Added to cart:', this.coffee.name);
  }
}
