import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PricesStore {
  mapping = signal([]);
  latestPrices: WritableSignal<{ [id: string]: LatestPriceStats }> = signal({});
  fiveMinutePrices: WritableSignal<{ [id: string]: FiveMinutePriceStats }> = signal({});

  prices: Signal<{ [id: string]: LatestPriceStats & FiveMinutePriceStats }> = computed(() => {
    if (!this.latestPrices() || !this.fiveMinutePrices()) return {};

    return Object.keys(this.latestPrices()).reduce((acc, id) => {
      acc[id] = {
        ...this.latestPrices()[id],
        ...this.fiveMinutePrices()[id],
      };
      return acc;
    }, {} as { [id: string]: LatestPriceStats & FiveMinutePriceStats });
  });
}
