import React from 'react';

const RTIAct = () => {
  const handleDocumentClick = () => {
    window.open('/assets/RTI.pdf', '_blank');
  };

  return (
    <div className='rtiact'>
      <h2 className='rti'>RTI Act </h2>
      <table className='table1'>
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>Order</th>
            <th>Order Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>RTI Act (English)</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>RTI Act (Telugu)</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>RTI Act (Hindi)</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>RTI Act (Urdu)</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>RTI Act - Proforma for 19 (3) Appeal</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>RTI Act - Proforma for 18(1)(*) Complaint</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Proformae for Annual Report</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>RTI Template (CGG) [4(1)(b)]</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>RTI Template (DoPT) [4(1)(b)]</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>RTI Template in Telugu (DoPT) [4(1)(b)]</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>RTI (AMENDMENT) ACT, 2019 (ENGLISH)</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>RTI Act 18/09/2020 (AMENDMENT) - English</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>RTI Act 17/05/2021 (AMENDMENT) - English</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>RTI Act 18/09/2020 (AMENDMENT) - Hindi</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>RTI Act 14/05/2021 (AMENDMENT) - Hindi</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>RTI Act Rules (English)</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>RTI Act Rules (Hindi)</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>RTI Act Rules, 2019 Notification dated: 24-10-2019</td>
            <td>
              <button onClick={handleDocumentClick}>Document</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RTIAct;