export const saveBaseCurrencyToLS = (currency: string): void => {
  localStorage.setItem("baseCurrency", currency);
};

export const getBaseCurrencyFromLS = (): string | null => {
  return localStorage.getItem("baseCurrency");
};
