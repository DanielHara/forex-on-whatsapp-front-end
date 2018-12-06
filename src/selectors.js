import { createSelector } from 'reselect';

const getClients = (state) => state.reducer.clients;
const getNumber = (state) => state.reducer.number;

export const clientsSelector = createSelector(
  getClients,
  (clients) => (clients)
);

export const numberSelector = createSelector(
  getNumber,
  (number) => (number)
);

// export const makeClientsSele

/*
export const getPrintableClientSelector = (state) => clientsSelector(state).map((client) => ({
  name: client.name,
  phoneNumber: client.phoneNumber,
  selectedCurrencies: client.selectedCurrencies.reduce((el, text) => `${text}, ${el}`),
}));
*/

/*
export const getPrintableClientSelector = createSelector(
  clientsSelector, (clients) => clients.map((client) => ({
    name: client.name,
    phoneNumber: client.phoneNumber,
    selectedCurrencies: client.selectedCurrencies.reduce((el, text) => `${text}, ${el}`),
  }))
);
*/
