import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const loginUser = {
    name: 'Alejo',
    email: 'alejo@email.com'
  };

  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button className='btn btn-primary' onClick={() => setUser(loginUser)}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
