import React, { useEffect } from 'react';

const Message = () => {
  useEffect(() => {
    const mouseMove = (e) => {
      console.log('here');
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Message</h3>
    </div>
  );
};

export default Message;
