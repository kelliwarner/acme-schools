import React from 'react';

const SchoolForm = ({ createSchool }) => {
  const onSubmit = e => {
    e.preventDefault();
    createSchool(e);
  };

  return (
    <div className="school form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="school-name">
            <h4>Create School</h4>
          </label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <button className="btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
};

export default SchoolForm;
