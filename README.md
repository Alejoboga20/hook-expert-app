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

```javascript
useEffect(() => {}, []);
```
