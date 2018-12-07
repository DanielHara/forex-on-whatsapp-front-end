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
      return getAllISOByCurrencyOrSymbol('currency', currencyCode)[0];
  }
};
