import axios from "axios";

const URL = "52.78.236.23";
// const URL = "127.0.0.1";

export const fetchMarketIssuesApi = () => {
  // return axios.get(`http://${URL}:3000/api/shinhan/market-issue`);
  return axios.get(`http://${URL}:3000/api/columnboard/list`);
};
