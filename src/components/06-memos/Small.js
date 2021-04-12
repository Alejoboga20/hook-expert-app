import React, { memo } from 'react';

const Small = memo(({ value }) => {
  console.log('here');

  return <small>{value}</small>;
});

export default Small;
