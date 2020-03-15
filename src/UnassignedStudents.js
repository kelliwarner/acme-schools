import React from 'react';

const UnassignedStudents = ({ students, handleClickStudent }) => {
  const unassignedStudents = students.filter(
    student => student.schoolId === null
  );

  return (
    <ul>
      {unassignedStudents.map(student => {
        return (
          <a href="/#view=student" key={student.id}>
            <div onClick={() => handleClickStudent(student)}>
              {student.name}
            </div>
          </a>
        );
      })}
    </ul>
  );
};

export default UnassignedStudents;
