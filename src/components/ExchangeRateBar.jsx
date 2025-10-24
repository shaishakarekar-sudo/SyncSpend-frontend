import React, { useEffect, useState } from "react";

const ExchangeRateBar = () => {
  const [rates, setRates] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch("https://api.exchangerate.host/latest?base=INR");
        const data = await res.json();
        setRates({
          USD: data.rates.USD.toFixed(2),
          EUR: data.rates.EUR.toFixed(2),
          GBP: data.rates.GBP.toFixed(2),
        });
      } catch (error) {
        console.error("Error fetching rates:", error);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60000); // update every 1 min
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-2 text-center text-sm">
      <p>
        💱 1 INR = {rates.USD} USD | {rates.EUR} EUR | {rates.GBP} GBP
      </p>
    </div>
  );
};

export default ExchangeRateBar;
