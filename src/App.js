import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './StudentForm';
import SchoolForm from './SchoolForm';
import SchoolDivs from './SchoolDivs';
import UnassignedStudents from './UnassignedStudents';
import UpdateStudent from './UpdateStudent';
import UpdateSchool from './UpdateSchool';

// To do:
// Routing

const App = ({ view }) => {
  const [schools, setSchools] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState({});
  const [selectedStudent, setSelectedStudent] = useState({});

  useEffect(() => {
    Promise.all([axios.get('/api/schools'), axios.get('/api/students')])
      .then(responses => responses.map(response => response.data))
      .then(results => {
        setSchools(results[0]);
        setStudents(results[1]);
      })
      .catch(ex => console.log(ex.response.data.message));
  }, []);

  const enrolledStudents = students.filter(
    student => student.schoolId !== null
  );

  const schoolOptions = () => {
    return schools.map(school => {
      return (
        <option key={school.id} value={school.id}>
          {school.name}
        </option>
      );
    });
  };

  const handleClickStudent = student => {
    console.log(student);
    setSelectedStudent(student);
  };

  const handleClickSchool = school => {
    console.log(school);
    setSelectedSchool(school);
  };

  const createSchool = async e => {
    e.preventDefault();
    const newSchool = e.target[0].value;
    await axios
      .post('/api/schools', { name: newSchool })
      .then(
        axios.get('/api/schools').then(results => setSchools(results.data))
      );
  };

  const createStudent = async student => {
    const result = await axios.post('/api/students', student);
    await axios.get('/api/students').then(results => setStudents(results.data));
  };

  const updateStudent = async student => {
    const response = await axios.put(`/api/students/${student.id}`, student);
  };

  const updateSchool = async school => {
    const response = await axios.put(`/api/schools/${school.id}`, school);
  };

  const deleteStudent = async student => {
    const response = await axios.delete(`api/students/${student.id}`);
  };

  const deleteSchool = async school => {
    const response = await axios.delete(`api/schools/${school.id}`);
  };

  if (view === 'users') {
    return <a href="/#view=list">Home</a>;
  }

  return (
    <div className="app">
      <div className="main-container">
        <h1>Acme Schools</h1>
        <ul>
          <li>{schools.length} schools</li>
          <li>
            {students.length} students ({enrolledStudents.length} enrolled)
          </li>
        </ul>
        <div className="form-container">
          <StudentForm
            schools={schools}
            createStudent={createStudent}
            schoolOptions={schoolOptions}
          />
          <SchoolForm createSchool={createSchool} />
        </div>
        <div className="results-container">
          <div className="unenrolled-students">
            <h4>Unenrolled Students</h4>
            <UnassignedStudents
              students={students}
              setSelectedStudent={setSelectedStudent}
              handleClickStudent={handleClickStudent}
            />
          </div>
          <SchoolDivs
            schools={schools}
            students={students}
            setStudents={setStudents}
            updateStudent={updateStudent}
            handleClickStudent={handleClickStudent}
            handleClickSchool={handleClickSchool}
          />
        </div>
        <div className="page-container">
          <UpdateStudent
            selectedStudent={selectedStudent}
            schoolOptions={schoolOptions}
            updateStudent={updateStudent}
            students={students}
            setStudents={setStudents}
            deleteStudent={deleteStudent}
          />
          <UpdateSchool
            selectedSchool={selectedSchool}
            setSelectedSchool={setSelectedSchool}
            schools={schools}
            setSchools={setSchools}
            updateSchool={updateSchool}
            deleteSchool={deleteSchool}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
