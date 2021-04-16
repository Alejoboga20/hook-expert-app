import React, { useState } from 'react';
import AppRouter from './AppRouter';
import { UserContext } from './UserContext';

const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <AppRouter />
      </UserContext.Provider>
    </div>
  );
};

export default MainApp;
