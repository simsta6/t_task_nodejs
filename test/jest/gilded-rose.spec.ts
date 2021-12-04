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
});
