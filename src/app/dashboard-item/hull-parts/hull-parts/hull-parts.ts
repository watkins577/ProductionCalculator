import { Component, computed } from '@angular/core';
import { PricesStore } from '../../../stores/prices-store';
import { DashboardItem, DashboardItemContent, DashboardItemTitle } from '../../dashboard-item';

@Component({
  selector: 'hull-parts',
  imports: [DashboardItem, DashboardItemContent, DashboardItemTitle],
  templateUrl: './hull-parts.html',
  styleUrl: './hull-parts.css',
})
export class HullParts {
  private itemIds: { [name: string]: { plank: number; hullParts: number; xp: number } } = {
    wood: {
      plank: 960,
      hullParts: 32041,
      xp: 72.5,
    },
    oak: {
      plank: 8778,
      hullParts: 32044,
      xp: 150,
    },
    teak: {
      plank: 8780,
      hullParts: 32047,
      xp: 225,
    },
    mahogany: {
      plank: 8782,
      hullParts: 32050,
      xp: 350,
    },
    camphor: {
      plank: 31432,
      hullParts: 32053,
      xp: 400,
    },
    ironwood: {
      plank: 31435,
      hullParts: 32056,
      xp: 437.5,
    },
    rosewood: {
      plank: 31438,
      hullParts: 32059,
      xp: 475,
    },
  };

  public calculatedPrices = computed(this.calculatePrices.bind(this));

  constructor(private store: PricesStore) {}

  private calculatePrices() {
    const data = this.store?.prices();
    if (!data) return [];

    return Object.entries(this.itemIds).map(([material, ids]) => {
      const plank = data[ids.plank];
      const hullParts = data[ids.hullParts];

      const plankBuyPrice = plank?.avgHighPrice ?? plank.high;
      const plankSellPrice = plank?.avgLowPrice ?? plank.low;

      const hullPartsBuyPrice = hullParts?.avgHighPrice ?? hullParts.high;
      const hullPartsSellPrice = hullParts?.avgLowPrice ?? hullParts.low;

      const margin = hullPartsSellPrice - plankBuyPrice * 5;

      const gpPerXp = Math.round((margin * 100) / ids.xp) / 100;

      return {
        material,
        plankBuyPrice,
        plankSellPrice,
        hullPartsBuyPrice,
        hullPartsSellPrice,
        margin,
        gpPerXp,
      };
    });
  }
}
