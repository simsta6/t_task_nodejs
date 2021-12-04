import { Item } from '../../gilded-rose';
import { BACKSTAGE_PASS, BRIE, CONJURED, SULFURAS } from '../constants/items';

export const mockedItems = [
  new Item('+5 Dexterity Vest', 10, 20),
  new Item(BRIE, 2, 0),
  new Item('Elixir of the Mongoose', 5, 7),
  new Item(SULFURAS, 0, 80),
  new Item(SULFURAS, -1, 80),
  new Item(BACKSTAGE_PASS, 15, 20),
  new Item(BACKSTAGE_PASS, 10, 49),
  new Item(BACKSTAGE_PASS, 5, 49),
  new Item(CONJURED, 3, 6)
];
