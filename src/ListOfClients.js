import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import namor from 'namor';
import Button from '@material-ui/core/Button';
import { currencies } from './constants';


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
    currencies: currencies.sort(() => (0.5 - Math.random()))
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

const ListOfClients = () =>
  <div>
    <ReactTable
    data={makeData()}
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
        accessor: "currencies",
      }],
    }]}
   defaultPageSize={10}
   className="-striped -highlight"
  />
    <Button href="/">
      Back to Home
    </Button>
  </div>

export default ListOfClients;
