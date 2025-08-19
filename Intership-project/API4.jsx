import React from 'react';

const API4 = () => {
  const handleDocumentClick = () => {
    window.open('/assets/API4(1)(b).pdf', '_blank');
  };
  return (
    <div className='api' >
      <h1 className='api41b'>API 4(1)(B)</h1>
      <div className='api4'>

    <table className='table2'>
        <tr>
          <th>s.no</th>
            <th>Orders</th>
            <th>Order Link</th>
        </tr>
        <tr>
            <td>1</td>
            <td>ఆంధ్ర ప్రదేశ్ సమాచార కమిషన్ యొక్క RTI చట్టం, 2005 లోని 4(1)(b) సమాచారం</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
        <tr>
            <td>2</td>
            <td>RTI Act 4(1)(b) Information - Andhra Pradesh Information Commission</td>
            <td>< button onClick={handleDocumentClick}> Document</button></td>
        </tr>
        
    </table>
     
    </div>
    </div>
  );
};

export default API4;
