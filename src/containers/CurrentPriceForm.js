import React from 'react';
import Button from '@material-ui/core/Button';

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

    const priceTags = prices ? prices.map((price) => (
      <div>
        { `${price.rate_float.toFixed(2)} ${price.code}` }
      </div>
    )) : [];

    return (
      <div>
        <div>
          <Button onClick={this.handleUpdateButtonClicked}>
            Update Price!
          </Button>
        </div>
        <div>
          1 Bitcoin is worth:
          { priceTags }
        </div>
      </div>
    );
  }
}

export default CurrentPriceForm;
