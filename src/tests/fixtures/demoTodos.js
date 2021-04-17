export const demoTodos = [
  { id: 1, desc: 'Learn React', done: false },
  { id: 2, desc: 'Learn Testing', done: false }
];

export const addAction = {
  type: 'add',
  payload: {
    id: 3,
    desc: 'NewTodo',
    done: false
  }
};
