import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';
import SchoolForm from './SchoolForm';
import SchoolDivs from './SchoolDivs';
import UnassignedStudents from './UnassignedStudents';

const App = () => {
  const [schools, setSchools] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    Promise.all([axios.get('/api/schools'), axios.get('/api/students')])
      .then(responses => responses.map(response => response.data))
      .then(results => {
        setSchools(results[0]);
        setStudents(results[1]);
      })
      .catch(ex => console.log(ex.response.data.message));
  }, []);

  const createSchool = async e => {
    e.preventDefault();
    const newSchool = e.target[0].value;
    await axios
      .post('/api/schools', { name: newSchool })
      .then(
        axios.get('/api/schools').then(results => setSchools(results.data))
      );
  };
  // const newStudent = { name: '', schoolId: '' };
  // newStudent.name = e.target[0].value;
  // newStudent.schoolId = e.target[1][1].id;

  const createStudent = async student => {
    const result = await axios.post('/api/students', student);
    await axios.get('/api/students').then(results => setStudents(results.data));
  };

  return (
    <div className="app">
      <div className="main-container">
        <h1>Acme Schools</h1>
        <ul>
          <li>{schools.length} schools</li>
          <li>{students.length} students</li>
        </ul>
        <div className="form-container">
          <StudentForm schools={schools} createStudent={createStudent} />
          <SchoolForm createSchool={createSchool} />
        </div>
        <div className="results-container">
          <div className="unenrolled-students">
            <h4>Unenrolled Students</h4>
            <UnassignedStudents students={students} />
          </div>
          <SchoolDivs schools={schools} students={students} />
        </div>
      </div>
    </div>
  );
};

export default App;
