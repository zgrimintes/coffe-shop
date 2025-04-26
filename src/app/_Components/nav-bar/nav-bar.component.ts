import { Component, inject } from '@angular/core';
import { CoffeeService } from '../../_Services/coffee.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  coffeeService = inject(CoffeeService);

  ngOnInit() {

  }

  order() {
    this.coffeeService.order();
  }
}
