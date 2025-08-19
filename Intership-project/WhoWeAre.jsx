import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const WhoWeAre = () => {
  return (
      
      <div className="whoweare">
        <h1 className='page'>Who We Are?</h1><br/><br/>
        <h5>1. How is the State Information Commission constituted?</h5>
    <ul>
        <li>The State Information Commission will be constituted by the State Government through a Gazette notification.</li>
        <li>It will have one State Chief Information Commissioner (SCIC) and not more than 10 State Information Commissioners (SIC) to be appointed by the Governor.</li>
        <li>The oath of office will be administered by the Governor according to the form set out in the First Schedule.</li>
        <li>The headquarters of the State Information Commission shall be at such place as the State Government may specify.</li>
        <li>Other offices may be established in different parts of the State with the approval of the State Government.</li>
        <li>The Commission will exercise its powers without being subjected to any other authority.</li>
    </ul>

    <h5>2. Eligibility Criterion & Appointment Process</h5>
    <ul>
        <li>The State Chief Information Commissioner and the State Information Commissioners shall be appointed by the Governor on the recommendation of a committee consisting of:</li>
        <ul>
            <li>(i) The Chief Minister, who shall be the Chairperson of the committee.</li>
            <li>(ii) The Leader of Opposition in the Legislative Assembly.</li>
            <li>(iii) A Cabinet Minister to be nominated by the Chief Minister.</li>
        </ul>
        <li>The Appointments Committee will be headed by the Chief Minister.</li>
        <li>Other members include the Leader of the Opposition in the Legislative Assembly and one Cabinet Minister nominated by the Chief Minister - <b>Section 15(3)</b>.</li>
        <li>The salaries and allowances payable to and other terms and conditions of service are as follows:</li>
        <ul>
            <li>(a) The State Chief Information Commissioner shall receive the same salary and allowances as an Election Commissioner.</li>
            <li>(b) The State Information Commissioner shall receive the same salary and allowances as the Chief Secretary to the State Government - <b>Section 16(5)</b>.</li>
        </ul>
    </ul>

    <h5>3. Reporting Procedure</h5>
    <ul>
        <li>The State Information Commission will submit a report to the State Government after every financial year.</li>
        <li>Each Ministry has a duty to compile reports from its Public Authorities and send them to the State Information Commission.</li>
        <li>Each report will contain:</li>
        <ul>
            <li>Details of the number of requests received by each Public Authority.</li>
            <li>Number of rejections and appeals.</li>
            <li>Particulars of any disciplinary action taken.</li>
            <li>Amount of fees and charges collected.</li>
        </ul>
        <li>The State Government will table the report of the State Information Commission before the Vidhan Sabha (and the Vidhan Parishad wherever applicable) - <b>Section 25</b>.</li>
    </ul>

          

        <Link to="/">
          
        </Link>
      </div>
  
  );
};

export default WhoWeAre;


