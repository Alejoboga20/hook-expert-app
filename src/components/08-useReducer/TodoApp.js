import React, { useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Learn React',
    done: false
  }
];

const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h1>Todo App</h1>
      <hr />

      <ol>
        <li>Hello</li>
        <li>Wolrd</li>
        <li>Reducer</li>
      </ol>
    </div>
  );
};

export default TodoApp;
