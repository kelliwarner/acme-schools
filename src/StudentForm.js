import React, { useState } from 'react';

const StudentForm = ({ schools, createStudent, schoolOptions }) => {
  const [student, setStudent] = useState({});

  //VVVthis is what Travis showed me, look at it more and try to understand it better VVV
  const updateStudent = key => e => {
    const { value } = e.target;
    setStudent({ ...student, [key]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    createStudent(student);
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
            onChange={updateStudent('name')}
          />
        </div>
        <div className="form-group">
          <select
            className="form-control"
            id="students"
            onChange={updateStudent('schoolId')}
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
