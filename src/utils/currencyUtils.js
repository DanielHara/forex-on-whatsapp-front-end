import { getAllISOByCurrencyOrSymbol } from 'iso-country-currency';

export const getCountryCodeFromCurrencyCode = (currencyCode) => {
  switch(currencyCode) {
    case 'USD':
      return 'US';
    case 'EUR':
      return 'EU';
    case 'GBP':
      return 'GB';
    default:
      let countryCode;
      try {
        countryCode = getAllISOByCurrencyOrSymbol('currency', currencyCode)[0];
      }
      catch {
        countryCode = undefined;
      }
      return countryCode;
  }
};
