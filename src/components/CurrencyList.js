import React from 'react';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { CountryFlag } from './CountryFlag';


export const ListItemLink = (props) => (
  <ListItem button component="a" {...props} />
);

export const CurrencyList = (props) => {
  const { prices } = props;
  console.log('CurrencyList:');
  console.log(prices);
  return (
    <div>
      <List component="nav">
        {prices.map((price) => (
          <ListItem button>
            <ListItemIcon>
              <CountryFlag currencyCode={price.code} />
            </ListItemIcon>
            <ListItemText primary={`${price.rate_float.toFixed(2)} ${price.code}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}


/*
export const CurrencyList = () => (
  <div>
    <List component="nav">
      <ListItem button>
        <ListItemIcon>
          <CountryFlag currencyCode="USD"/>
        </ListItemIcon>
        <ListItemText primary="3297.98 USD" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
    </List>
    <Divider />
    <List component="nav">
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <ListItemLink href="#simple-list">
        <ListItemText primary="Spam" />
      </ListItemLink>
    </List>
  </div>
)
*/


