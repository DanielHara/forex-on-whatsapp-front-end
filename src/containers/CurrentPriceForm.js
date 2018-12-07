import React from 'react';
import Button from '@material-ui/core/Button';
import { CurrencyList } from '../components/CurrencyList';
import { HomeButton } from '../components/HomeButton';
import { FormGrid } from '../InsertClientPage';

const COINDESK_ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice.json';

const fetchCurrentPrice = () => fetch(COINDESK_ENDPOINT)
                                .then(function(response) {
                                  return response.json();
                                });

async function getPrices() {
  const response = await fetchCurrentPrice();
  const responsePrices = response.bpi;

  const prices = [];
  Object.keys(responsePrices).forEach((key) => {
    prices.push(responsePrices[key]);
  });

  return prices;
}

class CurrentPriceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: [],
    };
    this.handleUpdateButtonClicked = this.handleUpdateButtonClicked.bind(this);
  }

  componentDidMount() {
    this.handleUpdateButtonClicked();
  }

  async handleUpdateButtonClicked() {
    const prices = await getPrices();
    this.setState({ prices: prices });
  }

  render() {
    const { prices } = this.state;

    return (
      <FormGrid>
        <div>
          <Button onClick={this.handleUpdateButtonClicked}>
            Update Price!
          </Button>
        </div>
        <div align='center'>
          1 Bitcoin is worth:
        </div>
        <CurrencyList prices={prices}/>
        <HomeButton />
      </FormGrid>
    );
  }
}

export default CurrentPriceForm;
