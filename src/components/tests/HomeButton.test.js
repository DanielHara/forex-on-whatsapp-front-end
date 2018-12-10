import React from 'react';
import { shallow } from 'enzyme';
import { HomeButton } from '../HomeButton';
import Button from '@material-ui/core/Button';

describe('HomeButton', () => {
  it('Should render Button to home page', () => {
    const button = shallow(<HomeButton />);
    expect(button.contains(
      <Button href="/" >
        Go To Home Page
      </Button>
    ));
  });
});
