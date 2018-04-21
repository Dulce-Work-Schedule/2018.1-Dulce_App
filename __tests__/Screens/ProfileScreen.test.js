import React from 'react';
import renderer from 'react-test-renderer';
import ProfileScreen from '../../src/Screens/ProfileScreen';
import Enzyme from 'enzyme';
import adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

  const props = {

    navigation: {

      state: {

        params: {

          userId: 1

        }
      }
    }
  };

  test('renders correctly' , () => {
    const tree = renderer
    .create(<ProfileScreen {...props} />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
