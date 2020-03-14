import React, { useState } from 'react';

const UpdateSchool = ({
  selectedSchool,
  updateSchool,
  setSchools,
  schools,
  deleteSchool,
}) => {
  const [school, setSchool] = useState({});

  const unchangedSchools = schools.filter(s => s.id !== school.id);

  const editSchool = key => e => {
    const { value } = e.target;
    console.log(selectedSchool);
    setSchool({ ...selectedSchool, [key]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(school);
    updateSchool(school);
    setSchools([...unchangedSchools, school]);
  };

  const removeSchool = school => {
    deleteSchool(school);
    const filteredSchools = schools.filter(s => s.id !== selectedSchool.id);
    setSchools(filteredSchools);
  };

  return (
    <div className="update-page">
      <h3>Update School</h3>
      <p> You are updating {selectedSchool.name}</p>
      <form className="update-form" onSubmit={onSubmit}>
        <div className="form-group">
          Edit School Name:
          <input
            type="text"
            className="form-control"
            onChange={editSchool('name')}
          />
        </div>
        <div className="form-group">
          <button className="btn-secondary">Update</button>
        </div>
      </form>
      <div className="form-group">
        <button
          className="btn-danger"
          onClick={() => {
            removeSchool(selectedSchool);
          }}
        >
          Delete School
        </button>
      </div>
    </div>
  );
};

export default UpdateSchool;
