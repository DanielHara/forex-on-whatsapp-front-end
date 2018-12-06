import { combineReducers } from 'redux';

const defaultState = {
  clients: [],
};

export const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case "ADD_CLIENT":
      const clients = state.clients ? state.clients : [];
      clients.push(action.client);
      const nextState = {
        clients: clients,
        number: state.number + 1,
      };
      return nextState;
    default:
      return state;
  }
};

export default combineReducers({ reducer });
