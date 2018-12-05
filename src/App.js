import React from 'react';
import InsertUserForm from './containers/insertUserForm';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const FormGrid = (props) => (
  <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
  >
    {props.children}
  </Grid>
)

const Title = () => <div>Enter your new client</div>

const App = () => (
  <FormGrid>
    <Title />
    <InsertUserForm />
    <Button href="/">
      Back to Home
    </Button>
  </FormGrid>
);

export default App;
