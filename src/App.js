import React from 'react';
import InsertUserForm from './containers/insertUserForm';
import Grid from '@material-ui/core/Grid';


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
  </FormGrid>
);

export default App;
