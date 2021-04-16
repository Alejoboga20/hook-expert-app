import React from 'react';
import { shallow } from 'enzyme';
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('MultipleCustomHooks tests', () => {
  useCounter.mockReturnValue({
    counter: 1,
    increment: () => {}
  });

  test('should display properly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show information', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Alejo', quote: 'Hello' }],
      loading: false,
      error: null
    });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe('Hello');
  });
});
