import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PricesService } from './services/prices-service/prices-service';
import { HullParts } from './dashboard-item/hull-parts/hull-parts/hull-parts';
import { Sails } from './dashboard-item/sails/sails/sails';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HullParts, Sails],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ProductionCalculator');

  constructor(private pricesService: PricesService) {}

  ngOnInit() {
    this.pricesService.fetchMapping();
    this.pricesService.fetchFiveMinutePrices();
    this.pricesService.fetchLatestPrices();
    setInterval(() => {
      this.pricesService.fetchFiveMinutePrices();
      this.pricesService.fetchLatestPrices();
    }, 1000 * 60);
  }
}
