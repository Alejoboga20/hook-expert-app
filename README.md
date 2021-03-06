# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Hooks Concepts

### useState Hook

useState Hook overwrittes the entire state defined in the hook. We must use spread operator to avoid this effect

```javascript
const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20
  });

  const { counter1, counter2 } = state;

  return (
    <>
      <h1>Counter1 {counter1}</h1>
      <h1>Counter2 {counter2}</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={() => {
          setState({ ...state, counter1: counter1 + 1 });
        }}
      >
        +1
      </button>
    </>
  );
};
```

### useEffect Hook

Leaving useEffect with no dependencies makes the component rerender after each change

```javascript
const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('Here');
  });

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
```

In the other hand, if the array of dependencies is blank, useEffect only run once. useEffect is used to listen to specific part of our app.
Also can be used for mount and unmount components. If we add events with useEffect we need to remove them at the end.

```javascript
useEffect(() => {}, []);

useEffect(() => {
  console.log('Component mounted');
  return () => {
    console.log('Component unmount');
  };
}, []);

useEffect(() => {
  const mouseMove = (e) => {
    console.log('here');
  };

  window.addEventListener('mousemove', mouseMove);

  return () => {
    window.removeEventListener('mousemove', mouseMove);
  };
}, []);
```

### useRef Hook

useRef is used to keep a mutable reference. Its value can be changed without trigger a rendering.
The most important use case of useRef is to update the state of an unmounted component. (Can happen when we cancel a petition for a component during a load for example)
We can set the status of a component to decide if we update the component or not. We can use useEffect to make that during the component unmount.

```javascript
import React, { useRef, useEffect, useState } from 'react';

export const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data
          });
        }
      });
  }, [url]);

  return state;
};
```

### React Memo

It's used to memorize components. The component is only rerender when its props have been changed.

```javascript
import React, { memo } from 'react';

const Small = memo(({ value }) => {
  console.log('here');

  return <small>{value}</small>;
});

export default Small;
```
