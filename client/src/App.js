import React from 'react';
import UploadForm from './components/upload-form/upload-form';
import UserGrid from './components/user-grid/user-grid';

function App() {
  return (
    <div className="app">
      <UploadForm />
      <UserGrid />
    </div>
  );
}

export default App;
