import { Component, computed } from '@angular/core';
import { DashboardItem, DashboardItemContent, DashboardItemTitle } from '../../dashboard-item';
import { PricesStore } from '../../../stores/prices-store';

@Component({
  selector: 'sails',
  imports: [DashboardItem, DashboardItemContent, DashboardItemTitle],
  templateUrl: './sails.html',
  styleUrl: './sails.css',
})
export class Sails {
  private itemIds: {
    [name: string]: { seed: number; hop: number; yarn: number; bolt: number };
  } = {
    hemp: {
      seed: 31543,
      hop: 31457,
      yarn: 31466,
      bolt: 31475,
    },
    cotton: {
      seed: 31545,
      hop: 31460,
      yarn: 31469,
      bolt: 31478,
    },
  };

  public calculatedPrices = computed(this.calculatePrices.bind(this));

  constructor(private store: PricesStore) {}

  private calculatePrices() {
    const data = this.store?.prices()?.data;
    if (!data) return [];

    return Object.entries(this.itemIds).map(([material, ids]) => {
      const seed = data[ids.seed];
      const hop = data[ids.hop];
      const yarn = data[ids.yarn];
      const bolt = data[ids.bolt];

      const seedBuyPrice = seed.avgHighPrice;
      const seedSellPrice = seed.avgLowPrice;
      const hopBuyPrice = hop.avgHighPrice;
      const hopSellPrice = hop.avgLowPrice;
      const yarnBuyPrice = yarn.avgHighPrice;
      const yarnSellPrice = yarn.avgLowPrice;
      const boltBuyPrice = bolt.avgHighPrice;
      const boltSellPrice = bolt.avgLowPrice;

      const growMargin = hopSellPrice * 27 - seedBuyPrice * 3;
      const spinMargin = yarnSellPrice - hopBuyPrice;
      const weaveMargin = boltSellPrice - yarnBuyPrice * 2;

      return {
        material,
        seedBuyPrice,
        seedSellPrice,
        hopBuyPrice,
        hopSellPrice,
        yarnBuyPrice,
        yarnSellPrice,
        boltBuyPrice,
        boltSellPrice,
        growMargin,
        spinMargin,
        weaveMargin,
      };
    });
  }
}
