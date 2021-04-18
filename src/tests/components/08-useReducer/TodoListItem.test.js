import { shallow } from 'enzyme';
import React from 'react';
import TodoListItem from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('TodoListItem tests', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  let wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(
      <TodoListItem
        todo={demoTodos[0]}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
      />
    );
  });

  test('should display properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call delete function', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('should call toggle function', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalled();
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('should show text properly', () => {
    const p = wrapper.find('p');
    expect(p.text()).toBe(`1 ${demoTodos[0].description}`);
    expect(wrapper.find('p').hasClass('complete')).toBe(false);
  });
});
