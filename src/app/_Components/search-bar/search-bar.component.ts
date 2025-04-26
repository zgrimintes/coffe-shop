import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoffeeService } from '../../_Services/coffee.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  coffeeService = inject(CoffeeService);
  
  searchQuery: string = '';

  onSearch() {
    var ok = false;

    this.coffeeService.coffeeList().forEach(coffee => {
      if (coffee.name.toLowerCase().includes(this.searchQuery.toLowerCase())) {
        this.coffeeService.addToCart(coffee);
        ok = true;
      }
    });

    if (!ok) {
      alert("No coffee found with that name.");
    }
  }
}
