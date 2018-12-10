import { getCountryCodeFromCurrencyCode } from "../currencyUtils";

const isoCountryCurrencyModule = require('iso-country-currency');

isoCountryCurrencyModule.getAllISOByCurrencyOrSymbol = jest.fn();

describe('getCountryCodeFromCurrencyCode', () => {
  beforeEach(() => {
    isoCountryCurrencyModule.getAllISOByCurrencyOrSymbol.mockReset();
  });
  
  it('US from USD', () => {
    expect(getCountryCodeFromCurrencyCode('USD')).toBe('US');
  });
  it('EU from EUR', () => {
    expect(getCountryCodeFromCurrencyCode('EUR')).toBe('EU');
  });
  it('GB from GBP', () => {
    expect(getCountryCodeFromCurrencyCode('GBP')).toBe('GB');
  });
  it('default: no exception', () => {
    const mockedCurrencySymbol = 'currency';
    isoCountryCurrencyModule.getAllISOByCurrencyOrSymbol.mockReturnValue([mockedCurrencySymbol]);
    expect(getCountryCodeFromCurrencyCode('JPY')).toBe(mockedCurrencySymbol);
  });
  it('default: undefined returned', () => {
    isoCountryCurrencyModule.getAllISOByCurrencyOrSymbol.mockReturnValue(undefined);
    expect(getCountryCodeFromCurrencyCode('JPY')).toBe(undefined);
  });
  it('default: exception returned', () => {
    isoCountryCurrencyModule.getAllISOByCurrencyOrSymbol.mockImplementation(() => {
      throw new Error();
    });
    expect(getCountryCodeFromCurrencyCode('JPY')).toBe(undefined);
  });
});
