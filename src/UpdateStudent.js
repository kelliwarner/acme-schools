import React, { useState } from 'react';

const UpdateStudent = ({
  selectedStudent,
  schoolOptions,
  updateStudent,
  students,
  setStudents,
  deleteStudent,
}) => {
  const [student, setStudent] = useState({});
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

  const removeStudent = student => {
    console.log('i am trying to delete', student);
    deleteStudent(student);
    const filteredStudents = students.filter(s => s.id !== student.id);
    console.log('setting students to', filteredStudents);
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
        <button
          className="btn-danger"
          onClick={() => removeStudent(selectedStudent)}
        >
          Delete Student
        </button>
      </div>
    </div>
  );
};

export default UpdateStudent;
