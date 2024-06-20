import axios from "axios";

export const fetchMarketIssuesApi = () => {
  return axios.get("http://52.78.236.23:3000/shinhan/market-issue");
};
