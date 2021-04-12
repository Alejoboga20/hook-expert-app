const initialState = [
  {
    id: 1,
    todo: 'Buy Milk',
    done: false
  }
];

const todoReducer = (state = initialState, action) => {
  if (action?.type === 'ADD TODO') {
    return [...state, action.payload];
  }

  return state;
};
const newTodo = {
  id: 2,
  todo: 'Clean House',
  done: false
};

const addTodoAction = {
  type: 'ADD TODO',
  payload: newTodo
};

const todos = todoReducer(initialState, addTodoAction);

console.log(todos);
