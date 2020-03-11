import React from 'react';

const StudentForm = ({ schools, createStudent }) => {
  const onSubmit = e => {
    e.preventDefault();
    createStudent(e);
  };

  const schoolOptions = () => {
    return schools.map(school => {
      return <option key={school.id}>{school.name}</option>;
    });
  };

  return (
    <div className="student form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="student-name">
            <h4>Create Student</h4>
          </label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <select className="form-control" id="students">
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
