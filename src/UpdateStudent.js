import React, { useState } from 'react';

const UpdateStudent = ({
  selectedStudent,
  schoolOptions,
  updateStudent,
  students,
  setStudents,
}) => {
  const [student, setStudent] = useState({});
  console.log('inside update student, students state is', students);
  const unchangedStudents = students.filter(s => s.id !== student.id);

  const editStudent = key => e => {
    const { value } = e.target;
    console.log(selectedStudent);
    setStudent({ ...selectedStudent, [key]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    updateStudent(student);
    setStudents([...unchangedStudents, student]);
  };

  return (
    <div className="update-page">
      <h3>Update Student</h3>
      <p> You are updating {selectedStudent.name}</p>

      <form className="update-form" onSubmit={onSubmit}>
        <div className="form-group">
          Edit student name:
          <input
            type="text"
            onChange={editStudent('name')}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <select className="form-control" onChange={editStudent('schoolId')}>
            <option value="">Select a School</option>
            {schoolOptions()}
          </select>
        </div>
        <div className="form-group">
          <button className="btn-secondary">Update</button>
        </div>
      </form>
      <div className="form-group">
        <button className="btn-danger">Delete Student</button>
      </div>
    </div>
  );
};

export default UpdateStudent;
