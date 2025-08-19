import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const WorkAllocation = () => {
  const handleDocumentClick = () => {
    window.open('/assets/RTI.pdf', '_blank');
  };

  return (
    <div className='wa'>
      <h1 className="page">Work Allocation </h1>
      <div className='doc'>
        <table className='WA'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Work Allocation-CIC/IC'S</th>
              <th>Document</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Work Allocation for State Chief Information Commissioner & State Information Commissioner's</td>
              <td>
                <button onClick={handleDocumentClick}>Document</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default WorkAllocation;