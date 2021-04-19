import { mount } from 'enzyme';
import React from 'react';
import HomeScreen from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('HomeScreen tests', () => {
  const user = {
    name: 'test',
    email: 'test@email.com'
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test('should display properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
