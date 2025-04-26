import { Component, EventEmitter, input, Output } from '@angular/core';
import { Coffee } from '../../_Models/Coffee';

@Component({
  selector: 'app-coffee-card',
  standalone: true,
  imports: [],
  templateUrl: './coffee-card.component.html',
  styleUrl: './coffee-card.component.scss'
})
export class CoffeeCardComponent {
  @Output() orderEvent = new EventEmitter<Coffee>();

  coffee = input.required<Coffee>();

  addToCart() {
    this.orderEvent.emit(this.coffee());
  }
}
