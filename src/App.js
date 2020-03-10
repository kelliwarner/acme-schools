import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from 'StudentForm';

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
    console.dir(e.target[0].value);
    await axios.post('/api/schools');
  };

  const schoolList = () => {
    schools.map(school => {
      return <div>{school.name}</div>;
    });
  };

  const studentList = () => {
    students.map(student => {
      return <div>{student.name}</div>;
    });
  };

  return (
    <div className="app">
      <div className="main-container">
        <h1>Acme Schools</h1>
        <div className="form-container">
          <StudentForm />
          <div className="school form">
            <form onSubmit={createSchool}>
              <div className="form-group">
                <label htmlFor="school-name">Create School</label>
                <input className="form-control" />
              </div>
              <div className="form-group">
                <button className="btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
        <div className="schools">{schoolList()}</div>
        <div className="students">{studentList()}</div>
      </div>
    </div>
  );
};

export default App;
