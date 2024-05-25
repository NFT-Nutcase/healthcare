import React, { useState } from 'react';
import { addPatient } from '../Casper';

const AddPatient = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [medicalRecord, setMedicalRecord] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const patientDetails = {
      id: parseInt(id),
      name,
      age: parseInt(age),
      medical_record: medicalRecord,
    };

    try {
      const deployHash = await addPatient(publicKey, privateKey, patientDetails);
      setStatus(`Patient added successfully. Deploy hash: ${deployHash}`);
    } catch (error) {
      setStatus(`Error adding patient: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Public Key:
          <input type="text" value={publicKey} onChange={(e) => setPublicKey(e.target.value)} />
        </label>
        <label>
          Private Key:
          <input type="text" value={privateKey} onChange={(e) => setPrivateKey(e.target.value)} />
        </label>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Medical Record:
          <input type="text" value={medicalRecord} onChange={(e) => setMedicalRecord(e.target.value)} />
        </label>
        <button type="submit">Add Patient</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default AddPatient;
