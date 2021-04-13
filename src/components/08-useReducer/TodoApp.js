import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import useForm from '../../hooks/useForm';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    };

    const action = {
      type: 'add',
      payload: newTodo
    };

    dispatch(action);
    reset();
  };

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

          <form className='form-control' onSubmit={handleSubmit}>
            <div>
              <input
                onChange={handleInputChange}
                type='text'
                name='description'
                placeholder='Task'
                autoComplete='off'
                value={description}
              />
            </div>
            <button className='btn btn-outline-primary mt-1' type='submit'>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
