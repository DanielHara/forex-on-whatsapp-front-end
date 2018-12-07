import { getAllISOByCurrencyOrSymbol } from 'iso-country-currency';

export const getCountryCodeFromCurrencyCode = (currencyCode) => {
  switch(currencyCode) {
    case 'USD':
      return 'US';
    default:
      return getAllISOByCurrencyOrSymbol('currency', currencyCode)[0];
  }
};
