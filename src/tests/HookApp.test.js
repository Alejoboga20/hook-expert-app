import React from 'react';
import { shallow } from 'enzyme';
import HookApp from '../HookApp';

describe('HookApp Tests', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
