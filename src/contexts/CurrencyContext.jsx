import React, { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CurrencyContext = createContext();

// Supported currencies with flag emojis
const SUPPORTED_CURRENCIES = [
  { code: "INR", flag: "🇮🇳", name: "Indian Rupee" },
  { code: "USD", flag: "🇺🇸", name: "US Dollar" },
  { code: "EUR", flag: "🇪🇺", name: "Euro" },
  { code: "GBP", flag: "🇬🇧", name: "British Pound" },
  { code: "JPY", flag: "🇯🇵", name: "Japanese Yen" },
];

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch live exchange rates (base INR)
  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch("https://api.exchangerate.host/latest?base=INR");
        const data = await res.json();
        if (data?.rates) setRates(data.rates);
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRates();
  }, []);

  const convertAmount = (amount) => {
    if (!rates[currency] || loading) return amount;
    return (amount * rates[currency]).toFixed(2);
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, convertAmount, rates, loading }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);

// -----------------------------
// Currency Selector UI Component
// -----------------------------
export const CurrencySelector = () => {
  const { currency, setCurrency, loading } = useCurrency();
  const [selected, setSelected] = useState(currency);

  useEffect(() => {
    setSelected(currency);
  }, [currency]);

  const handleChange = (e) => {
    const newCurrency = e.target.value;
    setSelected(newCurrency);
    setCurrency(newCurrency);
  };

  return (
    <div className="relative flex items-center gap-2">
      <label
        htmlFor="currency"
        className="text-sm text-gray-700 dark:text-gray-300 font-medium"
      >
        Currency:
      </label>

      <div className="relative">
        <select
          id="currency"
          value={selected}
          onChange={handleChange}
          disabled={loading}
          className="appearance-none bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 rounded-md px-3 py-1 pr-8 focus:outline-none transition-all duration-200 hover:ring-2 hover:ring-blue-500"
        >
          {SUPPORTED_CURRENCIES.map((cur) => (
            <option key={cur.code} value={cur.code}>
              {cur.flag} {cur.code}
            </option>
          ))}
        </select>

        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 pointer-events-none">
          ▼
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="text-xl ml-1"
        >
          {SUPPORTED_CURRENCIES.find((c) => c.code === selected)?.flag}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
