import { mount } from 'enzyme';
import React from 'react';
import AppRouter from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('AppRouter Tests', () => {
  const user = {
    name: 'test',
    email: 'test@email.com'
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test('should display properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
