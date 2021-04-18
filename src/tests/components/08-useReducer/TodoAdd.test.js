import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('TodoAdd Tests', () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test('should display properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should not call handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('should call handleAddTodo', () => {
    const value = 'Learn Test';
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description'
      }
    });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith({
      description: value,
      done: false,
      id: expect.any(Number)
    });
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
