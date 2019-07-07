import axios from 'axios';

const apiKey = '573204e4bf7cf1e414ba77ad74f4a03f';
const baseURL = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&lang=en&txt=`;

export const textanalysis = (text) => {
  return axios({
     method: 'GET',
     url: baseURL + text
  })
};

