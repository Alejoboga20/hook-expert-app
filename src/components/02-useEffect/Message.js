import React, { useEffect } from 'react';

const Message = () => {
  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmount');
    };
  }, []);

  return (
    <div>
      <h3>Message</h3>
    </div>
  );
};

export default Message;
