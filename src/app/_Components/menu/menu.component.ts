import { Component, inject } from '@angular/core';
import { CoffeeCardComponent } from '../coffee-card/coffee-card.component';
import { CommonModule } from '@angular/common';
import { Coffee } from '../../_Models/Coffee';
import { CoffeeService } from '../../_Services/coffee.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CoffeeCardComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  coffeService = inject(CoffeeService);
  coffeeList: Coffee[] = [];

  chunkedCoffeeList: Coffee[][] = [];

  ngOnInit() {
    this.coffeeList = this.coffeService.coffeeList();
    this.chunkedCoffeeList = this.chunkArray(this.coffeeList, 4);
  }

  chunkArray(array: Coffee[], chunkSize: number): Coffee[][] {
    const chunks: Coffee[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
}
