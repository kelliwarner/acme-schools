import React from 'react';

const UnassignedStudents = ({
  students,
  selectedStudent,
  setSelectedStudent,
  handleClickStudent,
}) => {
  const unassignedStudents = students.filter(
    student => student.schoolId === null
  );

  return (
    <ul>
      {unassignedStudents.map(student => {
        return (
          <div key={student.id} onClick={() => handleClickStudent(student)}>
            {student.name}
          </div>
        );
      })}
    </ul>
  );
};

export default UnassignedStudents;
