import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PricesStore {
  mapping = signal([]);
  prices: any = signal({});
}
