import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbad.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  console.log(author, quote);

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-right'>
          <p className='mb-0'>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      )}

      <div className='btn btn-primary' onClick={increment}>
        Next Quote
      </div>
    </div>
  );
};

export default MultipleCustomHooks;
