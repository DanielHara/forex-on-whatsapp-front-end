import { combineReducers } from 'redux';

const defaultState = {
  clients: ['ABCD'],
};

export const reducer = (state = defaultState, action) => {
  const clients = state.clients ? state.clients : [];
  clients.push(action.client);
  const nextState = {
    clients: clients,
  };
  console.log(nextState);
  return nextState;
}

export default combineReducers({ reducer });
