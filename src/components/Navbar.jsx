import React from "react";
import { CurrencySelector } from "../contexts/CurrencyContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-600 dark:bg-blue-800 text-white shadow-md transition-all">
      <div className="flex items-center gap-2">
        <span className="text-2xl">💰</span>
        <h1 className="text-2xl font-bold tracking-wide">SyncSpend</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* 🌍 Currency Selector (live rates, context-aware) */}
        <CurrencySelector />

        {/* 🌙 / ☀️ Theme Toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
