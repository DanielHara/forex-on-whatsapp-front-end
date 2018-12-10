import React from 'react';
import Button from '@material-ui/core/Button';

const Message = () => "This is a simple app, built for fun and to exercise a little bit of React-Redux. However, it encompasses most concepts of React-Redux for beginners, like Router, store and the mapStateToProps and mapDispatchToProps functions.";

const Home = () => 
  <div>
    <Message />
    <div>
      <Button href="/insertuser" >
        Go to Insert Client page
      </Button>
      <Button href="/currentprice" >
        Go To Current Price page
      </Button>
    </div>
  </div>;

export default Home;
