import { Component, inject } from '@angular/core';
import { CoffeeService } from '../../_Services/coffee.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
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
