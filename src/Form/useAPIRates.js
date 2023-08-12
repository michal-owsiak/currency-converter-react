import { useState, useEffect } from "react";
import axios from "axios";

export const useAPIRates = () => {
  const [APIRates, setAPIRates] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRates = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?symbols=AUD,CAD,CHF,CNH,EUR,GBP,HKD,JPY,NZD,PLN,USD&base=PLN"
        );

        const { rates, date } = response.data;

        setAPIRates({
          rates,
          date
        });
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
        setError(error);
      }
    };

    setTimeout(getRates, 1000);
  }, []);

  return { APIRates, error };
};