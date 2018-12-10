import React from 'react';
import { getCountryCodeFromCurrencyCode } from '../utils/currencyUtils';


export const getCountryFlagsURL = (countryCode) =>
  `https://www.countryflags.io/${countryCode}/flat/64.png`;

export const CountryFlag = (props) => {
  let { countryCode } = props;
  const { currencyCode } = props;
  if (countryCode) {
    return <img src={getCountryFlagsURL(countryCode)}
                alt={`Country Code: ${countryCode}`}
                align="right"
                height="20"
                width="20"/>;
  }

  if (!currencyCode) {
    return <div></div>;
  }

  countryCode = getCountryCodeFromCurrencyCode(currencyCode)

  if (!countryCode) {
    return <div></div>;
  }

  return <img src={getCountryFlagsURL(countryCode)}
              alt={`Country Code: ${countryCode}`}
              align="right"
              height="20"
              width="20"/>;
}
