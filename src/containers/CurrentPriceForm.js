import React from 'react';
import Button from '@material-ui/core/Button';
import { CurrencyList } from '../components/CurrencyList';
import { HomeButton } from '../components/HomeButton';
import { FormGrid } from './InsertClientPage';
import { getBitcoinPrices } from '../apis/coinDeskApi';
import { getEurPrices } from '../apis/fixerApi';


export const BTC = 'BTC';
export const EUR = 'EUR';
export const defaultBase = BTC;

class CurrentPriceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [],
      base: defaultBase,
    };
    this.handleUpdateButtonClicked = this.handleUpdateButtonClicked.bind(this);
    this.handleToggleButtonClicked = this.handleToggleButtonClicked.bind(this);
  }

  async componentDidMount() {
    this.handleUpdateButtonClicked();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.base !== this.state.base) {
      this.handleUpdateButtonClicked();
    }
  }

  async handleToggleButtonClicked() {
    const { base } = this.state;

    this.setState({
      base: base === EUR ? BTC : EUR,
    });
  }

  async handleUpdateButtonClicked() {
    const { base } = this.state;
    var prices;

    if (base === EUR) {
      prices = await getEurPrices();
    } else {
      prices = await getBitcoinPrices();
    }

    this.setState({
      prices: prices,
    });
  }

  render() {
    const { prices, base } = this.state;
    return (
      <FormGrid>
        <Button onClick={this.handleToggleButtonClicked}>
          { base === EUR ? "Change to BTC!" : "Change to EUR!" }
        </Button>
        <Button onClick={this.handleUpdateButtonClicked}>
          Update Price!
        </Button>
        <div align='center'>
          { base === EUR ? "1 EURO is worth:" : "1 BITCOIN is worth" }
        </div>
        <CurrencyList prices={prices}/>
        { base === BTC && "Powered by CoinDesk" }
        <HomeButton />
      </FormGrid>
    );
  }
}

export default CurrentPriceForm;
