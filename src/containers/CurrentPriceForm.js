import React from 'react';
import Button from '@material-ui/core/Button';
import { CurrencyList } from '../components/CurrencyList';
import { HomeButton } from '../components/HomeButton';
import { FormGrid } from '../InsertClientPage';
import { getBitcoinPrices } from '../apis/coinDeskApi';
import { getEurPrices } from '../apis/fixerApi';


class CurrentPriceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [],
      euroPrices: [],
    };
    this.handleUpdateButtonClicked = this.handleUpdateButtonClicked.bind(this);
  }

  async componentDidMount() {
    this.handleUpdateButtonClicked();
  }

  async handleUpdateButtonClicked() {
    const prices = await getBitcoinPrices();
    const euroPrices = await getEurPrices();
    this.setState({
      prices: prices,
      euroPrices: euroPrices,
    });
  }

  render() {
    const { prices, euroPrices} = this.state;
    return (
      <FormGrid>
        <Button onClick={getEurPrices}>
          Change to EUR!
        </Button>
        <Button onClick={this.handleUpdateButtonClicked}>
          Update Price!
        </Button>
        <div align='center'>
          1 Bitcoin is worth:
        </div>
        <CurrencyList prices={prices}/>
        <CurrencyList prices={euroPrices} />
        <HomeButton />
      </FormGrid>
    );
  }
}

export default CurrentPriceForm;
