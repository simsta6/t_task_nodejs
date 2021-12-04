import { Item, GildedRose } from '@/gilded-rose';
import { BACKSTAGE_PASS, BRIE, CONJURED, SULFURAS } from '@/utils/constants/items';

describe('Gilded Rose', () => {

  it(`updateQuality should never change ${SULFURAS} item properties`, () => {
    const initialItems: Item[] = [
      new Item(SULFURAS, 1, 80),
      new Item(SULFURAS, 0, 80),
      new Item(SULFURAS, -1, 80),
    ];
    const gildedRose = new GildedRose(initialItems);

    const days = 5;
    [...Array(days)].forEach(() => {
      const items = gildedRose.updateQuality();
      items.forEach((item, index) => {
        expect(item.name).toBe(initialItems[index].name);
        expect(item.sellIn).toBe(initialItems[index].sellIn);
        expect(item.quality).toBe(initialItems[index].quality);
      });
    });
  });

  [
    { name: BACKSTAGE_PASS, sellIn: 12, quality:  0, daysToUpdate:  2, sellInAfter: 10, qualityAfter:  2},
    { name: BACKSTAGE_PASS, sellIn: 10, quality:  0, daysToUpdate:  5, sellInAfter:  5, qualityAfter: 10},
    { name: BACKSTAGE_PASS, sellIn:  5, quality:  0, daysToUpdate:  5, sellInAfter:  0, qualityAfter: 15},
    { name: BACKSTAGE_PASS, sellIn:  1, quality: 50, daysToUpdate:  2, sellInAfter: -1, qualityAfter:  0},
    { name: BACKSTAGE_PASS, sellIn: 15, quality:  0, daysToUpdate: 15, sellInAfter:  0, qualityAfter: 30},
    { name: BACKSTAGE_PASS, sellIn: 15, quality:  0, daysToUpdate: 16, sellInAfter: -1, qualityAfter:  0},
    { name: BACKSTAGE_PASS, sellIn: 10, quality: 50, daysToUpdate:  2, sellInAfter:  8, qualityAfter: 50},
    { name: BACKSTAGE_PASS, sellIn:  0, quality:  0, daysToUpdate:  2, sellInAfter: -2, qualityAfter:  0},
  ].forEach(item =>
    it(`updateQuality should update ${BACKSTAGE_PASS} item quality to ${item.qualityAfter}`, () => {
      const gildedRose = new GildedRose([item]);

      [...Array(item.daysToUpdate)].forEach(() => gildedRose.updateQuality());

      const items = gildedRose.items;
      expect(items[0].name).toBe(item.name);
      expect(items[0].sellIn).toBe(item.sellInAfter);
      expect(items[0].quality).toBe(item.qualityAfter);
    }));
});
