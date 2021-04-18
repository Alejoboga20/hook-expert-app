export const demoTodos = [
  { id: 1, description: 'Learn React', done: false },
  { id: 2, description: 'Learn Testing', done: false }
];

export const addAction = {
  type: 'add',
  payload: {
    id: 3,
    description: 'NewTodo',
    done: false
  }
};

export const deleteAction = {
  type: 'delete',
  payload: 2
};

export const toggleAction = {
  type: 'toggle',
  payload: 1
};
