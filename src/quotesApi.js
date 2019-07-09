import axios from "axios";

export const quotesApi = () => {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json?`
  );
};



export default quotesApi; //whole file
