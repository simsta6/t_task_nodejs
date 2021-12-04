import { GildedRose } from './gilded-rose';
import { mockedItems } from './utils/data/items';

const isCmdLineArgumentsValid = (): boolean => {
  const args = process.argv.slice(2);

  if (args.length != 2) {
    return false;
  }

  const updateTimes = +args[0];
  const apiCallTimes = +args[1];

  return !(isNaN(updateTimes) || isNaN(apiCallTimes)) ;
};

const getCmdLineArguments = (): { updateTimes: number, apiCallTimes: number } => {
  if (!isCmdLineArgumentsValid()) {
    console.log('This process should be called with two arguments, both need to be number');
    process.exit(1);
  }
  const args = process.argv.slice(2);

  const updateTimes = +args[0];
  const apiCallTimes = +args[1];

  return { updateTimes, apiCallTimes};
};

const main = () => {
  const { updateTimes, apiCallTimes } = getCmdLineArguments();

  const gildedRose = new GildedRose(mockedItems);

  [...Array(updateTimes)].forEach((_, i) => {
    console.log('-------- day ' + i + ' --------');
    console.log('name, sellIn, quality');
    mockedItems.forEach(element => {
      console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);

    });
    console.log();
    gildedRose.updateQuality();
  });

};

main();
