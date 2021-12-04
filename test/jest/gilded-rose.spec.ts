import { Item, GildedRose } from '@/gilded-rose';
import {
  sulfurasTestData, brieTestData, conjuredTestData, backstageTestData, defaultTestData
} from './data/gilded-rose';

describe('updateQuality', () => {
  [
    ...sulfurasTestData,
    ...brieTestData,
    ...conjuredTestData,
    ...backstageTestData,
    ...defaultTestData
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
