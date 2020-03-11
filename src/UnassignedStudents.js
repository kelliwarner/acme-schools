import React from 'react';

const UnassignedStudents = ({ students }) => {
  return (
    <ul>
      {students.map(student => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
};

export default UnassignedStudents;
