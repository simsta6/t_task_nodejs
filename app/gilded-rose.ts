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

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items.forEach(item => {
            if (item.name != BRIE && item.name != BACKSTAGE_PASS) {
                if (item.quality > 0) {
                    if (item.name != SULFURAS) {
                        item.quality = item.quality - 1;
                    }
                }
            } else {
                if (item.quality < 50) {
                    item.quality = item.quality + 1;
                    if (item.name == BACKSTAGE_PASS) {
                        if (item.sellIn < 11) {
                            if (item.quality < 50) {
                                item.quality = item.quality + 1;
                            }
                        }
                        if (item.sellIn < 6) {
                            if (item.quality < 50) {
                                item.quality = item.quality + 1;
                            }
                        }
                    }
                }
            }
            if (item.name != SULFURAS) {
                item.sellIn = item.sellIn - 1;
            }
            if (item.sellIn < 0) {
                if (item.name != BRIE) {
                    if (item.name != BACKSTAGE_PASS) {
                        if (item.quality > 0) {
                            if (item.name != SULFURAS) {
                                item.quality = item.quality - 1;
                            }
                        }
                    } else {
                        item.quality = item.quality - item.quality;
                    }
                } else {
                    if (item.quality < 50) {
                        item.quality = item.quality + 1;
                    }
                }
            }
        });

        return this.items;
    }
}
