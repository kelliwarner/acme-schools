import React, { useState, useEffect } from 'react';

const App = () => {
  return (
    <div className="app">
      <div className="main-container">
        <h1>Acme Schools</h1>
        <div className="forms">
          <div className="create-student">
            <form>
              Create Student
              <input />
              <select className="form-control" id="students">
                <option value="">Student</option>
              </select>
              <button>Create</button>
            </form>
          </div>
          <div className="create-school">
            <form>
              Create School
              <input />
              <button>Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
