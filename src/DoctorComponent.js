import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DoctorComponent = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('doctor.xml');
        const parser = new DOMParser();
        const xmlString = response.data;
        console.log(xmlString); // Log the XML string
        const xml = parser.parseFromString(xmlString, 'text/xml');
        console.log(xml); // Log the parsed XML document

        const doctorNodes = xml.querySelectorAll('doctor');
        console.log(doctorNodes); // Log the doctor nodes

        const doctorsData = Array.from(doctorNodes).map(doctorNode => ({
          name: doctorNode.querySelector('name').textContent,
          specialty: doctorNode.querySelector('specialty').textContent,
          hospital: doctorNode.querySelector('hospital').textContent
        }));
        console.log(doctorsData); // Log the extracted data
        
        setDoctors(doctorsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Doctors</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Specialty</th>
            <th>Hospital</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={index}>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td>{doctor.hospital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorComponent;
