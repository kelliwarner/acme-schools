import React from 'react';

const UnassignedStudents = ({ students }) => {
  const unassignedStudents = students.filter(
    student => student.schoolId === null
  );

  return (
    <ul>
      {unassignedStudents.map(student => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
};

export default UnassignedStudents;
