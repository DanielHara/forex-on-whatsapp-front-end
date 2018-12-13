import React from 'react';
import { shallow } from 'enzyme';
import CurrentPriceForm from '../CurrentPriceForm';
import { EUR, BTC } from '../CurrentPriceForm';
import { ExpansionPanelActions } from '@material-ui/core';

const coinDeskApiModule = require('apis/coinDeskApi');
const fixerApiModule = require('apis/fixerApi');

const mockedBitcoinPrices = 'mockedBitcoinPrices';
const mockedEurPrices = 'mockedEurPrices';

const mockedHandleUpdateButtonClicked = jest.fn();
const mockedGetBitcoinPrices = jest.fn(() => new Promise((resolve, reject) => {
  resolve(mockedBitcoinPrices);
}));
const mockedGetEurPrices = jest.fn(() => new Promise((resolve, reject) => {
  resolve(mockedEurPrices);
}));

coinDeskApiModule.getBitcoinPrices = mockedGetBitcoinPrices;
fixerApiModule.getEurPrices = mockedGetEurPrices;


describe('componentDidMount', () => {
  it('should call handleUpdatebuttonClicked', () => {
    const currentPriceForm = shallow(<CurrentPriceForm />);
    currentPriceForm.instance().handleUpdateButtonClicked = mockedHandleUpdateButtonClicked;
    currentPriceForm.instance().componentDidMount();
    expect(mockedHandleUpdateButtonClicked).toHaveBeenCalledTimes(1);
  });
});

describe('componentDidUpdate', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call handleUpdateButtonClicked when base changes', () => {
    const currentPriceForm = shallow(<CurrentPriceForm />);
    currentPriceForm.instance().handleUpdateButtonClicked = mockedHandleUpdateButtonClicked;
    const state = currentPriceForm.state();
    const prevState = {
      base: (state.base === EUR) ? BTC : EUR,
    };

    currentPriceForm.instance().componentDidUpdate(null, prevState);
    expect(mockedHandleUpdateButtonClicked).toHaveBeenCalledTimes(1);
  });

  it('should not call handleUpdateButtonClicked when base does not change', () => {
    const currentPriceForm = shallow(<CurrentPriceForm />);
    currentPriceForm.instance().handleUpdateButtonClicked = mockedHandleUpdateButtonClicked;
    const state = currentPriceForm.state();

    currentPriceForm.instance().componentDidUpdate(null, state);
    expect(mockedHandleUpdateButtonClicked).not.toHaveBeenCalled();
  });
});

describe('handleToggleButtonClicked', () => {
  describe('should toggle state', () => {
    it('go from EUR to BTC', () => {
      const currentPriceForm = shallow(<CurrentPriceForm />);
      currentPriceForm.setState({
        base: EUR
      });
      currentPriceForm.instance().handleToggleButtonClicked();
      expect(currentPriceForm.state().base).toBe(BTC);
    });
    it('go from BTC to EUR', () => {
      const currentPriceFrom = shallow(<CurrentPriceForm />);
      currentPriceFrom.setState({
        base: BTC
      });
      currentPriceFrom.instance().handleToggleButtonClicked();
      expect(currentPriceFrom.state().base).toBe(EUR);
    });
  });
});

describe('handleUpdateButtonClicked', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should call getBitcoinPrices when base is BTC and set state to received prices', async () => {
    const currentPriceForm = shallow(<CurrentPriceForm />);
    currentPriceForm.setState({
      base: BTC
    });

    mockedGetEurPrices.mockClear();
    mockedGetBitcoinPrices.mockClear();

    await currentPriceForm.instance().handleUpdateButtonClicked();

    expect(mockedGetBitcoinPrices).toHaveBeenCalled();
    expect(mockedGetEurPrices).not.toHaveBeenCalled();
    expect(currentPriceForm.state().prices).toBe(mockedBitcoinPrices);
  });
  it('should call getEurPrices when base is EUR and set state to received prices', async() => {
    const currentPriceForm = shallow(<CurrentPriceForm />);
    currentPriceForm.setState({
      base: EUR
    });

    mockedGetEurPrices.mockClear();
    mockedGetBitcoinPrices.mockClear();
    
    await currentPriceForm.instance().handleUpdateButtonClicked();

    expect(mockedGetEurPrices).toHaveBeenCalled();
    expect(mockedGetBitcoinPrices).not.toHaveBeenCalled();
    expect(currentPriceForm.state().prices).toBe(mockedEurPrices);
  });
});



describe('CurrentPriceForm', () => {

});



