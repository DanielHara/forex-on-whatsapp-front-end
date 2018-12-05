import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const currencies = ['BTC', 'USD', 'CHF', 'GBP'];

class InsertUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleNameChange = (e) => {
    this.setState({ 'name': e.target.value});
  };

  handlePhoneNumberChange = (e) => {
    this.setState({ 'phoneNumber': e.target.value });
  };

  handleCurrencyChange = (e) => {
    this.setState({ 'selectedCurrency': e.target.value });
  };

  handleButtonClicked = () => {
    const outputString = `name: ${this.state.name}, phoneNumber: ${this.state.phoneNumber}, currency: ${this.state.selectedCurrency}`;
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
          <Select children={values} onChange={this.handleCurrencyChange} value={this.state && this.state.selectedCurrency} />
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={this.handleButtonClicked} >
            Submit!
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default InsertUserForm;
