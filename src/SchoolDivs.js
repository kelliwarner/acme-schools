import React from 'react';

const SchoolDivs = ({ schools }) => {
  return schools.map(school => {
    return (
      <div className="school-div" key={school.id}>
        <h4> {school.name}</h4>
      </div>
    );
  });
};

export default SchoolDivs;
