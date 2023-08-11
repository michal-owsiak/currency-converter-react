import { useState, useEffect } from "react";
import axios from "axios";

export const useAPIRates = () => {
  const [APIRates, setAPIRates] = useState("");

  useEffect(() => {
    const getRates = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?symbols=AUD,CAD,CHF,CNH,EUR,GBP,JPY,PLN,USD"
        );

        const { rates } = response.data;

        setAPIRates({
          rates
        });
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
        setAPIRates({
        });
      }
    };

    setTimeout(getRates, 1000);
  }, []);

  return APIRates;
};