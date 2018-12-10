import React from 'react';
import { shallow } from 'enzyme';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { CountryFlag } from '../CountryFlag';
import { CurrencyList } from '../CurrencyList';


describe('CurrencyList', () => {
  const mockedPrices = [{
    code: 'USD',
    rate_float: 1.20,
  },
  {
    code: 'EUR',
    rate_float: 1.21,
  }]

  const currencyList = shallow(<CurrencyList prices={mockedPrices} />);

  it('contains mapped items', () => {
    mockedPrices.forEach((mockedPrice) => {
      expect(currencyList.contains(
        <ListItem button>
            <ListItemIcon>
              <CountryFlag currencyCode={mockedPrice.code} />
            </ListItemIcon>
            <ListItemText primary={`${mockedPrice.rate_float.toFixed(2)} ${mockedPrice.code}`} />
          </ListItem>
      )).toBe(true);
    });
  });

  it('renders List', () => {
    expect(currencyList.contains(
      <List />
    ));
  });
});
