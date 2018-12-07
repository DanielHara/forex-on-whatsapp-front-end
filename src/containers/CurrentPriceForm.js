import React from 'react';
import Button from '@material-ui/core/Button';
import { CurrencyList } from '../components/CurrencyList';
import { HomeButton } from '../components/HomeButton';
import { FormGrid } from '../InsertClientPage';
import { getBitcoinPrices } from '../apis/coinDeskApi';


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
    const prices = await getBitcoinPrices();
    this.setState({ prices: prices });
  }

  render() {
    const { prices } = this.state;

    return (
      <FormGrid>
        <Button >
          Change to EUR!
        </Button>
        <Button onClick={this.handleUpdateButtonClicked}>
          Update Price!
        </Button>
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
