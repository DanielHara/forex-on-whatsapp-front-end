import React from 'react';
import { shallow } from 'enzyme';
import { getCountryFlagsURL, CountryFlag } from '../CountryFlag';

const currencyUtilsModule = require('utils/currencyUtils');
currencyUtilsModule.getCountryCodeFromCurrencyCode = jest.fn();

describe('CountryFlag', () => {
  describe('countryCode is provided', () => {
    it('should render image', () => {
      const mockedCountryCode = 'US';
      const countryFlag = shallow(<CountryFlag countryCode={mockedCountryCode} />);
      expect(countryFlag.contains(
        <img src={getCountryFlagsURL(mockedCountryCode)}
             alt={`Country Code: ${mockedCountryCode}`}
             align="right"
             height="20"
             width="20"
        />
      )).toBe(true);
    });
  });
  describe('countryCode is not provided', () => {
    it('currencyCode is provided and getCountryCodeFromCurrencyCode returns a defined value', () => {
      const mockedCountryCode = 'US';
      currencyUtilsModule.getCountryCodeFromCurrencyCode.mockReturnValue(mockedCountryCode);

      const mockedCurrencyCode = 'USD';
      const countryFlag = shallow(<CountryFlag currencyCode={mockedCurrencyCode} />);
      expect(countryFlag.contains(
        <img src={getCountryFlagsURL(mockedCountryCode)}
             alt={`Country Code: ${mockedCountryCode}`}
             align="right"
             height="20"
             width="20"
        />
        )).toBe(true);
    });
    it('currencyCode is provided and getCountrycodeFromCurrencyCode returns an undefined value', () => {
      const mockedCurrencyCode = 'USD';
      currencyUtilsModule.getCountryCodeFromCurrencyCode.mockReturnValue(undefined);

      const countryFlag = shallow(<CountryFlag currencyCode={mockedCurrencyCode} />);
      expect(countryFlag.contains(<img />)).toBe(false);
    });

    it('if neither currencyCode nor countryCode are provided', () => {
      const countryFlag = shallow(<CountryFlag />);
      expect(countryFlag.contains(<img />)).toBe(false);
    });
  });
});
