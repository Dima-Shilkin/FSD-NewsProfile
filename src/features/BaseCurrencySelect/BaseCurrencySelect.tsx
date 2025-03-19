import React from "react";

interface BaseCurrencySelectProps {
  baseCurrency: string;
  handleCurrencyChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const BaseCurrencySelect = ({
  baseCurrency,
  handleCurrencyChange,
}: BaseCurrencySelectProps) => {
  return (
    <div>
      <label htmlFor="baseCurrency">Выберите базовую валюту: </label>
      <select
        id="baseCurrency"
        value={baseCurrency}
        onChange={handleCurrencyChange}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CNY">CNY</option>
      </select>
    </div>
  );
};
