import React from 'react'

const Circulars = () => {
    const handleDocumentClick = () => {
        window.open('/assets/API4(1)(b).pdf', '_blank');
      };
  return (
    <div>
    <h2 className='circular'>Circulars</h2>
    <div className='table4'>
    <table >
        <thead>
            <tr>
                <th>S.No</th>
                <th>Circular</th>
                <th>Published Date</th>
                <th>Document</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Circular U.O.Note. No. 38912/RTIA/GPM&AR/2012 - Provisions of Special Imprest for Meeting the Expenditure on Providing Information to RTI Applicants - Instructions - Issued</td>
                <td>15/11/2012</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Circular U.O.Note No. 30581/RTIA/GPM&AR/2012 - Publication and Updation of Information u/s 4(1)(b) of the RTI Act, 2005 by the Public Authorities - Instructions - Reg.</td>
                <td>27/09/2012</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Circular U.O.Note. No. 40763/RTIA/GPM&AR/2010 - Action under Section 5(1)(2) & 4(1)(b) - Displaying the Information prominently and upload to the website of APIC - Instructions - Regarding</td>
                <td>11/11/2011</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Circular U.O. Note No. 33583/RTIA/GPM&AR/2011 - Appointment of Nodal Officers for coordination of RTI Act, 2005 where there is more than one Public Information Officer - Regarding</td>
                <td>27/10/2011</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>5</td>
                <td>Circular U.O. Note No. 22558/RTIA/GPM&AR/2011 - Strengthening the implementation of the Right to Information Act, 2005 - Regarding</td>
                <td>20/08/2011</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>6</td>
                <td>Circular U.O.Note. No. 7490/RTIA/GPM&AR/2011 - Implementation of sub-section 3 of Section 7 of the Act. Intimation to pay additional fee for providing the information within the fixed period - Instructions - Issued</td>
                <td>30/06/2011</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>7</td>
                <td>Circular U.O.Note. No. 20209/RTIA/GPM&AR/2011 - Minutes of meeting of Secretary, DoPt&T with Principal Secretaries of GADI Personnel Details of States/Cadres held on 24-03-2011 at Civil Servicers Office Institute at Kasturba Gandhi Marg, New Delhi - Communications of Minutes Regarding</td>
                <td>30/06/2011</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>8</td>
                <td>Circular Memo No. 15509/RTIA/GPM&AR/2010 - Information relating to PIOs/Appellate Authorities in Telugu on the website - Certain Instructions - Issued</td>
                <td>25/10/2010</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>9</td>
                <td>Memo No. 34858/RTIA/GPM&AR/2010 - Furnishing of the list of Public Authorities implementing provisions of Section 4(1)b and 5(1)(2) and ensuring their implementation by the defaulting Public Authorities - Instructions Issued</td>
                <td>19/10/2010</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>10</td>
                <td>Memo No. 33086/RTIA/GPM&AR/10 - Sensitization for enforcement of machinery for smooth functioning of the Act - Regarding</td>
                <td>30/09/2010</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>11</td>
                <td>Circular U.O.Note. No. 14425/RTIA/GPM&AR/10 - Acknowledge of RTI applications received by APIOs and PIOs under RTI Act and issuance of proper receipt to the applicants - Certain instructions issued</td>
                <td>05/06/2010</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>12</td>
                <td>Circular U.O.Note. No. 18402/RTIA/GPM&AR/10 - Publication and updation of information under 4(1)b of RTI Act, 2005 by the Public Authorities - Instructions - Issued</td>
                <td>04/06/2010</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>13</td>
                <td>Circular U.O.Note No. 38321/RTIA/GPM&AR/08 - Publication and Updation of Information u/s 4(1)(b) of the RTI Act, 2005 by the Public Authorities - Instructions - Reg.</td>
                <td>30/10/2008</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>14</td>
                <td>Circular U.O.Note No. 29225/Gen/08 - Receipt of Representations - Reply to the Concerned - Reg.</td>
                <td>23/07/2008</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>15</td>
                <td>Circular U.O.Note No. 20523/RTIA/GPM&AR/08 - Non Acceptance of Application Fee Paid by Means of Postal Order by Certain PIOs - Reiteration of Instructions - Reg.</td>
                <td>01/07/2008</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>16</td>
                <td>Circular U.O.Note No. 22028/RTIA/GPM&AR/08 - Submission of Report to APIC in Proforma D - Reg.</td>
                <td>23/06/2008</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>17</td>
                <td>Circular U.O.Note No. 16036/RTIA/GPM&AR/08 - Submission of Report to APIC in Proforma D - Instructions Reiterated - Reg.</td>
                <td>12/05/2008</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>18</td>
                <td>Circular U.O.Note No. 17256/RTIA/GPM&AR/07 - Preparation of Inventory of Public Authorities under RTI Act, 2005 - Instructions - Issued</td>
                <td>03/09/2007</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>19</td>
                <td>Circular U.O.Note No. 19108/RTIA/KPS/GPM&AR/07 - Submission of Report to APIC in Proforma D - Instructions Issued - Reg.</td>
                <td>16/07/2007</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>20</td>
                <td>Circular U.O.Note No. 2474/RTIA/KPS/GPM&AR/07 - Supply of Note Files Recording Sections / Officers / Secretaries / Ministers - Clarification u/s 8(1)(i) of the RTI Act, 2005 - Reg.</td>
                <td>12/06/2007</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>21</td>
                <td>Circular U.O.Note No. 2985/RTIA/KPS/GPM&AR/07 - Complaint on Non-acceptance of Fee by Cash - Clarification - Reg.</td>
                <td>08/06/2007</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>22</td>
                <td>Circular U.O.Note No. 18850/RTIA/KPS/GPM&AR/07 - Display of Information u/s 5(1)(2) at Prominent Places and Upload of Information u/s 4(1)(b) of the RTI Act, 2005 to APIC Website - Instructions - Reg.</td>
                <td>07/04/2007</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>23</td>
                <td>Circular Memo No. 15890/1&PR-11/2006 - Meeting with all Spl. CSs, Prl. Secys, Secys on 07-04-2006 - Convened by Chief Secy to Government to Review Implementation of RTI Act, 2005 - Reg.</td>
                <td>28/02/2006</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>24</td>
                <td>Circular Memo 118143/1&PR.II/A1/2005 - Template for Publishing Information u/s 4(1) of the RTI Act, 2005 for Guidance - Communicated - Reg.</td>
                <td>26/09/2005</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>25</td>
                <td>Circular Memo No. 85347/I&PR.II/A1/2005-7 - Action Taken for Operationalisation of the RTI Act, 2005 - Report Called For - Reg.</td>
                <td>03/09/2005</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>26</td>
                <td>Circular Memo No. 85347/1&PR, II/A1/2005-6 - Action Taken for Operationalisation of the RTI Act, 2005 - Report Called For - Reg.</td>
                <td>30/08/2005</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>27</td>
                <td>Circular Memo No. 85305/1&PR-II/A1/2005-2 - Obligation u/s 4(1)(a), 4(1)(b) and 5 of the RTI Act, 2005 - Certain Instructions - Issued</td>
                <td>25/07/2005</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>28</td>
                <td>Circular Memo No. 85305/1&PR-II/A1/2005-1 - Obligation u/s 4(1)(a), 4(1)(b) and 5 of the RTI Act, 2005 - Certain Instructions - Issued</td>
                <td>22/07/2005</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
        </tbody>
    </table>

    </div>

    </div>
  )
}

export default Circulars;