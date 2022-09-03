import axios from "axios";
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL

export const getApi = (path) => {
  return axios.get(apiBaseUrl + path, {
    headers: {
      "Content-Type": "application/json"
    }
  })
};
