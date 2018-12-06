import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import namor from 'namor';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { currencies } from './constants';
import { clientsSelector, numberSelector } from './selectors';


const range = len => {
  const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
  return arr;
};

const newPerson = () => {
  const n = Math.floor(Math.random() * currencies.length) + 1;
  return {
    name: namor.generate({ words: 2, numbers: 0 }),
    phoneNumber: `+${Math.random().toString().slice(2,11)}`,
    selectedCurrencies: currencies.sort(() => (0.5 - Math.random()))
                                  .slice(0, n)
                                 .reduce((prev, current) => `${current}, ${prev}`),
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newPerson(),
      children: range(10).map(newPerson)
    };
  });
};

class ListOfClients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      realData: true,
    };
  }

  handleToggleButtonClicked = () => {
    this.setState({
      realData: !this.state.realData
    });
  }

  getData = () => this.state.realData ? this.props.clients.map((client) => ({
    name: client.name,
    phoneNumber: client.phoneNumber,
    selectedCurrencies: client.selectedCurrencies.reduce((el, text) => `${text}, ${el}`),
  })) : makeData();

  render() {
    return (
      <div>
        <ReactTable
          data={this.getData()}
          columns={[
          {
            Header: "Client",
            columns: [
            {
              Header: "Name",
              accessor: "name"
            },
            {
              Header: "Phone Number",
              accessor: "phoneNumber"
            },
            {
              Header: "Currencies",
              accessor: "selectedCurrencies",
            }],
          }]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <Button href="/">
          Back to Home
        </Button>
        <Button onClick={this.handleToggleButtonClicked} >
          { this.state.realData ? "Switch to random" : "Switch to Real Data" }
        </Button >
      </div>
    );
  }
};

export const mapStateToProps = (state) => ({
  clients: clientsSelector(state),
  number: numberSelector(state)
});

export default connect(mapStateToProps, null)(ListOfClients);
