import fetch from 'node-fetch';

interface YesNoResponse {
  answer: string;
  forced: boolean;
  image: string;
}

const URL = 'https://yesno.wtf/api';

export const fetchAnswer = async (): Promise<string> => {
  try {
    const response = await fetch(URL);
    const data: YesNoResponse = await response.json();
    return data.answer;
  } catch (err) {
    console.log(err);
    return '';
  }
};
