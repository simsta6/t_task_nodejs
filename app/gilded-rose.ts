import { ITEMS} from './utils/constants';

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      // default value for item quality change over time
      let qualityChange = item.sellIn > 0 ? -1 : -2;

      // Special cases
      switch (item.name) {
      case ITEMS.SULFURAS: // Sulfuras's properties never changes
        return;
      case ITEMS.BRIE:
        qualityChange = item.sellIn > 0 ? 1 : 2;
        break;
      case ITEMS.BACKSTAGE_PASS:
        if (item.sellIn > 10) {
          qualityChange = 1;
        } else if (item.sellIn > 5 && item.sellIn < 11) {
          qualityChange = 2;
        } else if (item.sellIn > 0 && item.sellIn < 6) {
          qualityChange = 3;
        } else {
          qualityChange = -item.quality; //sets quality to zero
        }
        break;
      case ITEMS.CONJURED:
        qualityChange *= 2;
        break;
      }

      item.quality += qualityChange;
      if (item.quality > 50) {
        item.quality = 50;
      } else if (item.quality < 0) {
        item.quality = 0;
      }

      item.sellIn -= 1;
    });

    return this.items;
  }
}
