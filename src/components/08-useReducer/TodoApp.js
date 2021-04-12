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
      <h1>Todo App {todos.length}</h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <ul className='list-group list-group-flush'>
            {todos.map((todo, index) => (
              <li key={todo.id} className='list-group-item'>
                <p className='text-center'>
                  {index + 1} {todo.description}
                </p>
                <button className='btn btn-danger'>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-5'>
          <h4>Add Task</h4>
          <hr />
          <form className='form-control'>
            <div>
              <input
                type='text'
                name='description'
                placeholder='Task'
                autoComplete='off'
              />
            </div>
            <button className='btn btn-outline-primary mt-1'>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
