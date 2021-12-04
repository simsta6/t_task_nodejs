import { Item } from '../gilded-rose';
import { ITEMS } from '../utils/constants';

export const mockedItems = [
  new Item('+5 Dexterity Vest', 10, 20),
  new Item(ITEMS.BRIE, 2, 0),
  new Item('Elixir of the Mongoose', 5, 7),
  new Item(ITEMS.SULFURAS, 0, 80),
  new Item(ITEMS.SULFURAS, -1, 80),
  new Item(ITEMS.BACKSTAGE_PASS, 15, 20),
  new Item(ITEMS.BACKSTAGE_PASS, 10, 49),
  new Item(ITEMS.BACKSTAGE_PASS, 5, 49),
  new Item(ITEMS.CONJURED, 3, 6)
];
