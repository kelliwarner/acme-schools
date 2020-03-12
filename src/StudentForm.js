import React, { useState } from 'react';

const StudentForm = ({ schools, createStudent }) => {
  const [student, setStudent] = useState({});

  const updateStudent = e => {
    const name = e.target.value;
    setStudent({ ...student, name });
  };

  const updateStudent1 = e => {
    const schoolId = e.target.value;
    console.dir(e.target);
    setStudent({ ...student, schoolId });
  };

  const onSubmit = e => {
    e.preventDefault();

    console.log(student);
  };

  const schoolOptions = () => {
    return schools.map(school => {
      return (
        <option key={school.id} value={school.id}>
          {school.name}
        </option>
      );
    });
  };

  return (
    <div className="student form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="student-name">
            <h4>Create Student</h4>
          </label>
          <input
            type="text"
            className="form-control"
            onChange={updateStudent}
          />
        </div>
        <div className="form-group">
          <select
            className="form-control"
            id="students"
            onChange={updateStudent1}
          >
            <option value="">Select a School</option>
            {schoolOptions()}
          </select>
        </div>
        <div className="form-group>">
          <button className="btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
