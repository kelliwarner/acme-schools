import React from 'react';

const SchoolDivs = ({ schools, students }) => {
  const studentList = () => {
    return students.map(student => {
      return <option key={student.id}>{student.name}</option>;
    });
  };

  return schools.map(school => {
    const enrolledStudents = students.filter(
      student => student.schoolId === school.id
    );

    return (
      <div className="school-div" key={school.id}>
        <h4> {school.name}</h4>
        <select className="form-control" id="students">
          <option value="">Select a Student</option>
          {studentList()}
        </select>
        <ul>
          {enrolledStudents.map(student => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      </div>
    );
  });
};

export default SchoolDivs;
