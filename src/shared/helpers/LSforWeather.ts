export const saveCityToLocalStorage = (city: string): void => {
  const citiesString = localStorage.getItem("cities");
  const cities: string[] = citiesString ? JSON.parse(citiesString) : [];

  if (!cities.includes(city)) {
    if (cities.length >= 5) {
      cities.shift();
    }
    cities.push(city);
    localStorage.setItem("cities", JSON.stringify(cities));
  }
};

export const getCitiesFromLocalStorage = (): string[] => {
  const citiesString = localStorage.getItem("cities");
  return citiesString ? JSON.parse(citiesString) : [];
};
