import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos, addAction } from '../../fixtures/demoTodos';

describe('todoReducer tests', () => {
  test('should return default state', () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('should add a new Todo', () => {
    const state = todoReducer(demoTodos, addAction);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, addAction.payload]);
  });
});
