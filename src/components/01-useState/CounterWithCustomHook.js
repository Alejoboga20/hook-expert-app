import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Counter with Hook: {state}</h1>
      <hr />

      <button onClick={() => increment(1)} className='btn btn-primary'>
        +1
      </button>
      <button onClick={() => decrement(1)} className='btn btn-primary'>
        -1
      </button>
      <button onClick={reset} className='btn btn-secondary'>
        reset
      </button>
    </div>
  );
};

export default CounterWithCustomHook;
