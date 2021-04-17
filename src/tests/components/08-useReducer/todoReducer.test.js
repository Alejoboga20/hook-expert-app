import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import {
  demoTodos,
  addAction,
  deleteAction,
  toggleAction
} from '../../fixtures/demoTodos';

const todoBench = [
  { id: 1, desc: 'Learn React', done: true },
  { id: 2, desc: 'Learn Testing', done: false }
];

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

  test('should delete a Todo', () => {
    const state = todoReducer(demoTodos, deleteAction);
    expect(state.length).toBe(1);
    expect(state).toEqual(
      demoTodos.filter((todo) => todo.id !== deleteAction.payload)
    );
  });

  test('should toggle a Todo', () => {
    const state = todoReducer(demoTodos, toggleAction);
    expect(state.length).toBe(2);
    expect(state).toEqual(todoBench);
  });
});
