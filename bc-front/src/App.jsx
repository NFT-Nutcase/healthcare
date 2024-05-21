import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: ''
  });

  const [tableData, setTableData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({ field1: '', field2: '', field3: '', field4: '' });
  };

  return (
    <>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Patient ID:
              <input
                type="text"
                name="field1"
                value={formData.field1}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Doctor:
              <input
                type="text"
                name="field2"
                value={formData.field2}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Patient Name:
              <input
                type="text"
                name="field3"
                value={formData.field3}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Diagnosis:
              <input
                type="text"
                name="field4"
                value={formData.field4}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">Add</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Doctor</th>
              <th>Patient Name</th>
              <th>Diagnosis</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.field1}</td>
                <td>{data.field2}</td>
                <td>{data.field3}</td>
                <td>{data.field4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
