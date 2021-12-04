import { Item, GildedRose } from '@/gilded-rose';
import { BACKSTAGE_PASS, BRIE, CONJURED, SULFURAS } from '@/utils/constants/items';

describe('updateQuality', () => {

  const backstageTestData = [
    { name: BACKSTAGE_PASS, sellIn: 12, quality:  0, daysToUpdate:  2, sellInAfter: 10, qualityAfter:  2 }, //  sellIn > 10
    { name: BACKSTAGE_PASS, sellIn: 10, quality:  0, daysToUpdate:  5, sellInAfter:  5, qualityAfter: 10 }, //  5 < sellIn < 10
    { name: BACKSTAGE_PASS, sellIn:  5, quality:  0, daysToUpdate:  5, sellInAfter:  0, qualityAfter: 15 }, //  0 < sellIn < 5
    { name: BACKSTAGE_PASS, sellIn: 15, quality:  0, daysToUpdate: 15, sellInAfter:  0, qualityAfter: 30 }, //  0 < sellIn < 15
    { name: BACKSTAGE_PASS, sellIn: 15, quality:  0, daysToUpdate: 16, sellInAfter: -1, qualityAfter:  0 }, // -1 < sellIn < 15
    { name: BACKSTAGE_PASS, sellIn: 10, quality: 50, daysToUpdate:  2, sellInAfter:  8, qualityAfter: 50 }, //  quality > 50
    { name: BACKSTAGE_PASS, sellIn:  0, quality:  0, daysToUpdate:  2, sellInAfter: -2, qualityAfter:  0 }, //  quality < 0
  ];

  const brieTestData = [
    { name: BRIE, sellIn:  5, quality:  0, daysToUpdate:  5, sellInAfter:  0, qualityAfter:  5 }, //  sellIn is positive
    { name: BRIE, sellIn:  0, quality:  0, daysToUpdate:  5, sellInAfter: -5, qualityAfter: 10 }, //  sellIn is negative
    { name: BRIE, sellIn:  5, quality:  0, daysToUpdate: 10, sellInAfter: -5, qualityAfter: 15 }, //  sellIn is positive but becomes negative
    { name: BRIE, sellIn:  1, quality: 50, daysToUpdate:  1, sellInAfter:  0, qualityAfter: 50 }, //  quality > 50
  ];

  const conjuredTestData = [
    { name: CONJURED, sellIn:  5, quality: 20, daysToUpdate:  5, sellInAfter:  0, qualityAfter: 10 }, //  sellIn is positive
    { name: CONJURED, sellIn:  0, quality:  5, daysToUpdate:  5, sellInAfter: -5, qualityAfter:  0 }, //  sellIn is negative
    { name: CONJURED, sellIn:  5, quality:  5, daysToUpdate: 10, sellInAfter: -5, qualityAfter:  0 }, //  sellIn is positive but becomes negative
    { name: CONJURED, sellIn:  1, quality:  0, daysToUpdate:  1, sellInAfter:  0, qualityAfter:  0 }, //  quality < 0
  ];

  const sulfurasTestData = [
    { name: SULFURAS, sellIn:  1, quality:  80, daysToUpdate:  5, sellInAfter:  1, qualityAfter: 80 },
    { name: SULFURAS, sellIn:  0, quality:  80, daysToUpdate:  5, sellInAfter:  0, qualityAfter: 80 },
    { name: SULFURAS, sellIn: -1, quality:  80, daysToUpdate:  5, sellInAfter: -1, qualityAfter: 80 },
  ];

  [
    ...sulfurasTestData,
    ...brieTestData,
    ...conjuredTestData,
    ...backstageTestData
  ].forEach(item =>
    it(`it should update ${item.name} item quality to ${item.qualityAfter} and sellIn to ${item.sellIn}`, () => {
      const { name, sellIn, quality, sellInAfter, qualityAfter } = item;
      const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);

      [...Array(item.daysToUpdate)].forEach(() => gildedRose.updateQuality());

      const items = gildedRose.items;
      expect(items[0].name).toBe(name);
      expect(items[0].sellIn).toBe(sellInAfter);
      expect(items[0].quality).toBe(qualityAfter);
    }));
});
