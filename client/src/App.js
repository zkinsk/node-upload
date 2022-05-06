import React, { useState, useEffect } from 'react';
import UploadForm from './components/upload-form/upload-form';
import UserGrid from './components/user-grid/user-grid';
import { setLocalState, readLocalState } from './utils/local-storage';

function App() {
  const [users, setUsers] = useState(readLocalState('savedUsers') || []);

  const setNewUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  useEffect(() => {
    setLocalState('savedUsers', users);
  }, [users]);

  return (
    <div className="app">
      <UploadForm onAddUser={setNewUser} />
      <UserGrid users={users} />
    </div>
  );
}

export default App;
