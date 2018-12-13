import React from 'react';
import { shallow } from 'enzyme';
import CurrentPriceForm from '../CurrentPriceForm';
import { EUR, BTC } from '../CurrentPriceForm';
import { ExpansionPanelActions } from '@material-ui/core';


const mockedHandleUpdateButtonClicked = jest.fn();

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

describe('CurrentPriceForm', () => {

});



