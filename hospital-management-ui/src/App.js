import React from 'react';
import AddPatient from './components/AddPatient';
import GetPatient from './components/GetPatient';

const App = () => {
  return (
    <div>
      <h1>Hospital Management DApp</h1>
      <AddPatient />
      <GetPatient />
    </div>
  );
};

export default App;
