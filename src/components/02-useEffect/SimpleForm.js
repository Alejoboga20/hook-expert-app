import React, { useState, useEffect } from 'react';
import './effects.css';

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('Here');
  }, []);

  useEffect(() => {
    console.log('Form State');
  }, [formState]);

  const handleInputChange = ({ target }) => {
    console.log(target);
    setFormState({ ...formState, [target.name]: target.value });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Name'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className='form-group'>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default SimpleForm;
