import fs from 'fs';
import { GildedRose } from './gilded-rose';
import { fetchAnswer } from './services/yesno-api';
import { LOG_FILE_NAME } from './utils/constants/files-locations';
import { WRONG_ARGUMENTS_MSG } from './utils/constants/messages';
import { mockedItems } from './utils/data/items';
import { getCmdLineArguments } from './utils/utils';

const makeAPICalls = (apiCallTimes: number): Promise<string[]> =>
  Promise.all([...Array(apiCallTimes)].map(async () => await fetchAnswer()));

const getPositiveAnswersCount = (answers: string[]) => answers.filter(answer => answer === 'yes').length;

const makeCycleOfApiCalls = async (apiCallTimes: number) => {
  if (apiCallTimes === 0) {
    return;
  }
  const positiveAnswers = getPositiveAnswersCount(await makeAPICalls(apiCallTimes));

  fs.appendFileSync(LOG_FILE_NAME, positiveAnswers.toString() + '\n');

  await makeCycleOfApiCalls(positiveAnswers);
};

const main = async () => {
  const { updateTimes, apiCallTimes } = getCmdLineArguments(process.argv);

  if (updateTimes == -1 || apiCallTimes == -1) {
    console.log(WRONG_ARGUMENTS_MSG);
    process.exit(1);
  }

  fs.unlinkSync(LOG_FILE_NAME);

  const gildedRose = new GildedRose(mockedItems);

  for (let i = 0; i < updateTimes; i++) {
    await makeCycleOfApiCalls(apiCallTimes);
    gildedRose.updateQuality();
  }

};

main();
