import React from 'react';
import { shallow } from 'enzyme';
import { HomeButton } from '../HomeButton';
import Button from '@material-ui/core/Button';

describe('HomeButton', () => {
  it('Should render button', () => {
    const button = shallow(<HomeButton />);
    expect(button.contains(
      <Button href="/" >
        Go To Home Page
      </Button>
    ));
  });
});
