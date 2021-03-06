import { mount } from 'enzyme';
import React from 'react';
import LoginScreen from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('LoginScreen Tests', () => {
  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('should display properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call setUser with correct argument', () => {
    wrapper.find('button').prop('onClick')();
    expect(setUser).toHaveBeenCalledWith({
      name: 'Alejo',
      email: 'alejo@email.com'
    });
  });
});
