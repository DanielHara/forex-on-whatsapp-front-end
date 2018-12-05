import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const CurrencyWrapper = styled.div`
  padding: 5px;
`;

const ButtonWrapper = styled.div`
  padding: 5px;
`;

const currencies = ['BTC', 'USD', 'CHF', 'GBP'];

class InsertUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      selectedCurrencies: [currencies[0]],
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value});
  };

  handlePhoneNumberChange = (e) => {
    this.setState({ phoneNumber: e.target.value });
  };

  handleCurrencyChange = (e, index) => {
    const newSelectedCurrencies = this.state.selectedCurrencies.slice();
    newSelectedCurrencies[index] = e.target.value;
    this.setState({
      selectedCurrencies: newSelectedCurrencies,
    });
  };

  handleCurrencyAdded = (e) => {
    if (this.state.selectedCurrencies.length >= currencies.length) {
      alert(`You can choose between at most ${currencies.length} currencies.`);
      return;
    }

    this.setState({
      selectedCurrencies: this.state.selectedCurrencies.concat(currencies[0]),
    })
  };

  handleDeleteCurrency = (index) => {
    const newSelectedCurrencies = this.state.selectedCurrencies.slice();
    newSelectedCurrencies.splice(index, 1);
    this.setState({
      selectedCurrencies: newSelectedCurrencies,
    });
  }

  handleButtonClicked = () => {
    const outputString = `name: ${this.state.name}, phoneNumber: ${this.state.phoneNumber}, selectedCurrencies: ${this.state.selectedCurrencies}`;
    alert(outputString);
  };

  render() {
    const values = currencies.map((currency) => 
      <MenuItem
        key={currency}
        insertChildren={true}
        value={currency}
        primaryText={currency}
        children={currency}
      />
    );

    return (
      <React.Fragment>
        <div>
          <TextField label="Name" onChange={this.handleNameChange} />
        </div>
        <div>
          <TextField label="Phone Number" onChange={this.handlePhoneNumberChange} />
        </div>
        <div>
          {
            this.state.selectedCurrencies.map((selectedCurrency, index) => (
              <CurrencyWrapper>
                <Select children={values} onChange={(e) => { this.handleCurrencyChange(e, index)}} value={selectedCurrency} />
                <Button variant="contained" color="default" onClick={() => {
                  this.handleDeleteCurrency(index);
                }}>
                  Delete Currency
                </Button>
              </CurrencyWrapper>
            ))
          }
        </div>
        <ButtonWrapper>
          <Button variant="contained" color="secondary" onClick={this.handleCurrencyAdded} >
            Add new currency
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button variant="contained" color="primary" onClick={this.handleButtonClicked} >
            Submit!
          </Button>
        </ButtonWrapper>
      </React.Fragment>
    );
  }
}

export default InsertUserForm;
