import React from 'react';
import InsertUserForm from './InsertUserForm';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ListOfClients from './ListOfClients';


export const FormGrid = (props) => (
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

const InsertClientPage = () => (
  <div>
    <FormGrid>
      <Title />
      <InsertUserForm />
      <Button href="/">
        Back to Home
      </Button>
    </FormGrid>
    <ListOfClients />
  </div>
);

export default InsertClientPage;
