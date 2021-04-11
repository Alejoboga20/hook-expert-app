import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import Small from './Small';

const Memorize = () => {
  const { counter, increment } = useCounter(10);

  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button className='btn btn-primary' onClick={() => increment(1)}>
        +1
      </button>
    </div>
  );
};

export default Memorize;
