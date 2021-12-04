import { BACKSTAGE_PASS, BRIE, CONJURED, SULFURAS } from '@/utils/constants/items';

interface UpdateQualityType {
  name: string;
  sellIn: number;
  quality: number;
  daysToUpdate: number;
  sellInAfter: number;
  qualityAfter: number;
}

export const backstageTestData: UpdateQualityType[] = [
  { name: BACKSTAGE_PASS, sellIn: 12, quality:  0, daysToUpdate:  2, sellInAfter: 10, qualityAfter:  2 }, //  sellIn > 10
  { name: BACKSTAGE_PASS, sellIn: 10, quality:  0, daysToUpdate:  5, sellInAfter:  5, qualityAfter: 10 }, //  5 < sellIn < 10
  { name: BACKSTAGE_PASS, sellIn:  5, quality:  0, daysToUpdate:  5, sellInAfter:  0, qualityAfter: 15 }, //  0 < sellIn < 5
  { name: BACKSTAGE_PASS, sellIn: 15, quality:  0, daysToUpdate: 15, sellInAfter:  0, qualityAfter: 30 }, //  0 < sellIn < 15
  { name: BACKSTAGE_PASS, sellIn: 15, quality:  0, daysToUpdate: 16, sellInAfter: -1, qualityAfter:  0 }, // -1 < sellIn < 15
  { name: BACKSTAGE_PASS, sellIn: 10, quality: 50, daysToUpdate:  2, sellInAfter:  8, qualityAfter: 50 }, //  quality > 50
  { name: BACKSTAGE_PASS, sellIn:  0, quality:  0, daysToUpdate:  2, sellInAfter: -2, qualityAfter:  0 }, //  quality < 0
];

export const brieTestData: UpdateQualityType[] = [
  { name: BRIE, sellIn:  5, quality:  0, daysToUpdate:  5, sellInAfter:  0, qualityAfter:  5 }, //  sellIn is positive
  { name: BRIE, sellIn:  0, quality:  0, daysToUpdate:  5, sellInAfter: -5, qualityAfter: 10 }, //  sellIn is negative
  { name: BRIE, sellIn:  5, quality:  0, daysToUpdate: 10, sellInAfter: -5, qualityAfter: 15 }, //  sellIn is positive but becomes negative
  { name: BRIE, sellIn:  1, quality: 50, daysToUpdate:  1, sellInAfter:  0, qualityAfter: 50 }, //  quality > 50
];

export const conjuredTestData: UpdateQualityType[] = [
  { name: CONJURED, sellIn:  5, quality: 20, daysToUpdate:  5, sellInAfter:  0, qualityAfter: 10 }, //  sellIn is positive
  { name: CONJURED, sellIn:  0, quality:  5, daysToUpdate:  5, sellInAfter: -5, qualityAfter:  0 }, //  sellIn is negative
  { name: CONJURED, sellIn:  5, quality:  5, daysToUpdate: 10, sellInAfter: -5, qualityAfter:  0 }, //  sellIn is positive but becomes negative
  { name: CONJURED, sellIn:  1, quality:  0, daysToUpdate:  1, sellInAfter:  0, qualityAfter:  0 }, //  quality < 0
];

export const sulfurasTestData: UpdateQualityType[] = [
  { name: SULFURAS, sellIn:  1, quality:  80, daysToUpdate:  5, sellInAfter:  1, qualityAfter: 80 },
  { name: SULFURAS, sellIn:  0, quality:  80, daysToUpdate:  5, sellInAfter:  0, qualityAfter: 80 },
  { name: SULFURAS, sellIn: -1, quality:  80, daysToUpdate:  5, sellInAfter: -1, qualityAfter: 80 },
];

export const defaultTestData: UpdateQualityType[] = [
  { name: 'Default', sellIn:  5, quality: 20, daysToUpdate:  5, sellInAfter:  0, qualityAfter: 15 }, //  sellIn is positive
  { name: 'Default', sellIn:  0, quality:  5, daysToUpdate:  5, sellInAfter: -5, qualityAfter:  0 }, //  sellIn is negative
  { name: 'Default', sellIn:  5, quality:  5, daysToUpdate: 10, sellInAfter: -5, qualityAfter:  0 }, //  sellIn is positive but becomes negative
  { name: 'Default', sellIn:  1, quality:  0, daysToUpdate:  1, sellInAfter:  0, qualityAfter:  0 }, //  quality < 0
];
