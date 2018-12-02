import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


const currencies = ['BTC', 'USD', 'CHF', 'GBP'];

class InsertUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.setState({});
  }

  handleNameChange = (e) => {
    this.setState({ 'name': e.target.value});
  }

  handlePhoneNumberChange = (e) => {
    this.setState({ 'phoneNumber': e.target.value });
  }

  handleCurrencyChange = (e) => {
    this.setState({ 'selectedCurrency': e.target.value });
  }

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
          {this.state && this.state.name }
        </div>
        <div>
          <TextField label="Phone Number" onChange={this.handlePhoneNumberChange} />
          {this.state && this.state.phoneNumber }
        </div>
        <div>
          <Select children={values} onChange={this.handleCurrencyChange} value={this.state && this.state.selectedCurrency} />
        </div>
      </React.Fragment>
    );
  }
}

export default InsertUserForm;
