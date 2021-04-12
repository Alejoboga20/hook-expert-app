import React from 'react';

const ShowIncrement = React.memo(({ increment }) => {
  console.log('here');

  return (
    <button className='btn btn-primary' onClick={() => increment(10)}>
      increment
    </button>
  );
});

export default ShowIncrement;
