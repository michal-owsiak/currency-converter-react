import axios from "axios";
import { API } from "./API";

export const fetchAPI = async () => {
  try {
    const response = await axios.get(API);

    const { rates, date } = response.data;

    return {
      rates,
      date
    };
  } catch (error) {
    console.error("Error fetching exchange rates.", error);
  }
};
