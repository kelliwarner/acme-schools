import React from 'React';

const StudentForm = () => {
  const onSubmit = e => {
    e.preventDefault();
    console.log('createStudent has been called');
  };

  return (
    <div className="student form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="student-name">Create Student</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <select className="form-control" id="students">
            <option value="student">Student</option>
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
