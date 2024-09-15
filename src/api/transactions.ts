import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/transactions";

export const fetchTransactions = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
