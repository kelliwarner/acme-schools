import React, { useState } from 'react';

const UpdateStudent = ({
  selectedStudent,
  schoolOptions,
  updateStudent,
  students,
  setStudents,
  deleteStudent,
}) => {
  const [student, setStudent] = useState({ ...selectedStudent });
  const unchangedStudents = students.filter(s => s.id !== student.id);

  const editStudent = key => e => {
    const { value } = e.target;
    console.log(selectedStudent);
    setStudent({ ...selectedStudent, [key]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('something is happening');
    updateStudent(student).then(response => {
      // setStudents([...unchangedStudents, student]);
      window.location = '';
    });
  };

  const removeStudent = student => {
    deleteStudent(student);
    const filteredStudents = students.filter(s => s.id !== student.id);
    setStudents(filteredStudents);
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
            value={student.name}
          />
        </div>
        <div className="form-group">
          <select className="form-control" onChange={editStudent('schoolId')}>
            <option value="">Select a School</option>
            {schoolOptions()}
          </select>
        </div>
        <div className="form-group">
          <a href="/#">
            <button className="btn-secondary">Update</button>
          </a>
        </div>
      </form>
      <div className="form-group">
        <a href="/#">
          <button
            className="btn-danger"
            onClick={() => removeStudent(selectedStudent)}
          >
            Delete Student
          </button>
        </a>
      </div>
    </div>
  );
};

export default UpdateStudent;
