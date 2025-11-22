import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PricesStore } from '../../stores/prices-store';

@Injectable({
  providedIn: 'root',
})
export class PricesService {
  private baseUrl = 'https://prices.runescape.wiki/api/v1/osrs/';
  private headers = {
    headers: {
      'x-user-agent': 'production calculator - @watkins577 on discord',
    },
  };

  constructor(private http: HttpClient, private store: PricesStore) {}

  public fetchMapping() {
    return this.http.get(`${this.baseUrl}/mapping`, this.headers).subscribe((mapping: any) => {
      this.store.mapping.set(mapping);
    });
  }

  public fetchPrices() {
    return this.http.get(`${this.baseUrl}/latest`, this.headers).subscribe((prices: any) => {
      this.store.prices.set(prices);
    });
  }
}
