import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { bigProcess } from '../../helpers/bigProcess';
import '../02-useEffect/effects.css';

const Memorize = () => {
  const { counter, increment } = useCounter(500);
  const [show, setShow] = useState(false);

  const memoBigProcess = useMemo(() => bigProcess(counter), [counter]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <hr />
      <p>{memoBigProcess}</p>
      <button className='btn btn-primary' onClick={() => increment(1)}>
        +1
      </button>

      <button
        className='btn btn-outline-primary ml-3'
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
