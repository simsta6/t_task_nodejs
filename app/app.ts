import fs from 'fs';
import { GildedRose } from './gilded-rose';
import { fetchAnswer } from './services/yesno-api';
import { FILES, MESSAGES } from './utils/constants';
import { mockedItems } from './data/items';
import { getCmdLineArguments } from './utils/utils';

const makeCycleOfApiCalls = async (apiCallTimes: number) => {
  if (!apiCallTimes) {
    return;
  }

  const positiveAnswers = await Promise.all([...Array(apiCallTimes)].map(async () => await fetchAnswer()))
    .then(answers => answers.filter(a => a === 'yes').length);

  fs.appendFileSync(FILES.LOG_FILE_NAME, positiveAnswers.toString() + '\n');

  await makeCycleOfApiCalls(positiveAnswers);
};

const main = async () => {
  const args = getCmdLineArguments(process.argv);
  if (!args) {
    console.log(MESSAGES.WRONG_ARGUMENTS);
    process.exit(1);
  }

  if (fs.existsSync(FILES.LOG_FILE_NAME)) {
    fs.unlinkSync(FILES.LOG_FILE_NAME); // Deletes file
  }

  const gildedRose = new GildedRose(mockedItems);

  for (let i = 0; i < args.updateTimes; i++) {
    await makeCycleOfApiCalls(args.apiCallTimes);
    gildedRose.updateQuality();
  }
};

main();
