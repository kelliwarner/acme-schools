import React, { useState } from 'react';

// 1) add functionality so that when the select option is changed (onchange?)
//// the selected student is automatically assigned (or reassigned) to that school

const SchoolDivs = ({ schools, students }) => {
  const [student, setStudent] = useState({});

  // const enrollStudent = e => {
  //   console.dir(e.target.value);
  //   // const newSchool = e.target.value;
  //   // setStudent({ ...student, 'SchoolId': newSchool });
  // };

  const enrollStudent = school => e => {
    console.dir(e.target);
    const newStudent = { ...student, schoolId: school.id };
    console.log(newStudent);
    setStudent(newStudent);
  };

  const studentList = filteredStudents => {
    return filteredStudents.map(student => {
      return <option key={student.id}>{student.name}</option>;
    });
  };

  return schools.map(school => {
    const enrolledStudents = students.filter(
      student => student.schoolId === school.id
    );
    const unenrolledStudents = students.filter(
      student => student.schoolId !== school.id
    );

    return (
      <div className="school-div" key={school.id}>
        <h4> {school.name}</h4>
        <select
          className="form-control"
          id="students"
          onChange={enrollStudent(school)}
        >
          <option value="">Enroll a Student</option>
          {studentList(unenrolledStudents)}
        </select>
        <div>
          {enrolledStudents.map(student => (
            <div className="enrolled-student" key={student.id}>
              {student.name}
              <button className="btn btn-secondary">Unenroll</button>
            </div>
          ))}
        </div>
      </div>
    );
  });
};

export default SchoolDivs;
