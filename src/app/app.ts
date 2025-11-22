import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PricesService } from './services/prices-service/prices-service';
import { HullParts } from './dashboard-item/hull-parts/hull-parts/hull-parts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HullParts],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ProductionCalculator');

  constructor(private pricesService: PricesService) {}

  ngOnInit() {
    this.pricesService.fetchMapping();
    this.pricesService.fetchPrices();
    setInterval(() => {
      this.pricesService.fetchPrices();
    }, 1000 * 60);
  }
}
