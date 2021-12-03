import { BACKSTAGE_PASS, BRIE, SULFURAS } from './utils/constants/items';

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

const fixItemQuality = (item: Item) => {
    if (item.quality > 50) {
        item.quality = 50;
    } else if (item.quality < 0) {
        item.quality = 0;
    }
    return item;
};

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            switch(item.name) {
            case BRIE:
                item.quality += item.sellIn > 0 ? 1 : 2;
                item = fixItemQuality(item);
                break;
            case BACKSTAGE_PASS:
                if (item.sellIn > 10) {
                    item.quality += 1;
                } else if (item.sellIn > 5 && item.sellIn < 11) {
                    item.quality += 2;
                } else if (item.sellIn > 0 && item.sellIn < 6) {
                    item.quality += 3;
                } else {
                    item.quality = 0;
                }
                item = fixItemQuality(item);
                break;
            case SULFURAS:
                break;
            default:
                item.quality -= item.sellIn > 0 ? 1 : 2;
                item = fixItemQuality(item);
                break;
            }

            if (item.name != SULFURAS) {
                item.sellIn = item.sellIn - 1;
            }
        });

        return this.items;
    }
}
