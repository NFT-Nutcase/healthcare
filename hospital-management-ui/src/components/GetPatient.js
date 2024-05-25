import React, { useState } from 'react';

const GetPatient = () => {
  const [id, setId] = useState('');
  const [patient, setPatient] = useState(null);
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Implement the function to get patient details
    try {
      // const patientDetails = await getPatient(id);
      // setPatient(patientDetails);
      setStatus('Patient details retrieved successfully.');
    } catch (error) {
      setStatus(`Error retrieving patient: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Get Patient</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <button type="submit">Get Patient</button>
      </form>
      {status && <p>{status}</p>}
      {patient && (
        <div>
          <p>ID: {patient.id}</p>
          <p>Name: {patient.name}</p>
          <p>Age: {patient.age}</p>
          <p>Medical Record: {patient.medical_record}</p>
        </div>
      )}
    </div>
  );
};

export default GetPatient;
