import axios from "axios";

//const URL = "52.78.236.23";
const URL = "127.0.0.1";

export const fetchDomesticStockApi = () => {
  return axios.get(`http://${URL}:3000/api/koreainvestment/domestic-stock`);
};
