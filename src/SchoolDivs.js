import React from 'react';

const SchoolDivs = ({
  schools,
  students,
  setStudents,
  updateStudent,
  handleClickStudent,
  handleClickSchool,
}) => {
  // unenroll & enroll functions work on the front end not but they
  // dont persist. need to add put functions to make sure the db
  // gets updated

  const enrollStudent = school => e => {
    const updatedStudent = {
      ...JSON.parse(e.target.value),
      schoolId: school.id,
    };
    const unchangedStudents = students.filter(
      student => student.id !== updatedStudent.id
    );
    updateStudent(updatedStudent);
    setStudents([...unchangedStudents, updatedStudent]);
  };

  const unenroll = student => {
    const unenrolledStudent = { ...student, schoolId: null };
    console.log('unenrolledStudent is', unenrolledStudent);
    const unchangedStudents = students.filter(
      student => student.id !== unenrolledStudent.id
    );
    setStudents([...unchangedStudents, unenrolledStudent]);
  };

  const studentList = filteredStudents => {
    return filteredStudents.map(student => {
      return (
        <option key={student.id} value={JSON.stringify(student)}>
          {student.name}
        </option>
      );
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
        <h4 onClick={() => handleClickSchool(school)}> {school.name}</h4>
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
            <div
              className="enrolled-student"
              key={student.id}
              onClick={() => handleClickStudent(student)}
            >
              {student.name}
              <button
                className="btn btn-secondary"
                onClick={() => unenroll(student)}
              >
                Unenroll
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  });
};

export default SchoolDivs;
