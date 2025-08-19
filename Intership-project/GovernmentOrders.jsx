import React from 'react';

const GovernmentOrders = () => {
    const handleDocumentClick = () => {
        window.open('/assets/API4(1)(b).pdf', '_blank');
      };
  return (
    <div>
      <h1 className='go'>Government Orders</h1>
     


    <h5 className='GO'>1. Constitution of Andhra Pradesh Information Commission</h5 >
    <div className='tab3'>
    <table className='table3'>
        <tr>
          <th>s.no</th>
            <th>Orders</th>
            <th>Order Document</th>
        </tr>
        <tr>
          <th>1</th>
            <td>G.O.Ms.No. 504 GA (I&PR) Dept., Dated 12-11-2005</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
        <tr>
        <th>2</th>
            <td>G.O.Ms.No. 111 GA (ARATII) Dept, Dated 11-08-2017</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
    </table>

    <h5 className='GO'>2. Constitution of Committees</h5 >
    <table className='table3'>
        <tr>
        <th>s.no</th>
            <th>Orders</th>
            <th>Order Document</th>
        </tr>
        <tr>
        <th>1</th>
            <td>G.O.Ms.No. 331 GA (I&PRII) Dept, Dated 01-08-2005 - Committee to Monitor the Progress in Nationalisation of the RTI Act, 2005</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
        <tr>
        <th>2</th>
            <td>(Coordination, GPMBAR) Dept., Dated Implementation of the RTI Act, 2005 1-2005 - HLC on Coordinated</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
    </table>

    <h5 className='GO'>3. Andhra Pradesh (Regulation of Fee & Cost) Rules, 2005</h5 >
    <table className='table3'>
        <tr>
        <th>s.no</th>
            <th>Orders</th>
            <th>Order Document</th>
        </tr>
        <tr>
        <th>1</th>
            <td>G.O.Ms.No. 336 GA (GPMBAR) Dept, Dated 23-06-2005 - Amendment Head of Account for Operationalisation of the RTI Act, 2005</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
        <tr>
        <th>2</th>
            <td>2009 - Change of Head of Account</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
    </table>

    <h5 className='GO'>4. Andhra Pradesh State Information Commission (Appeal Procedure) Rules</h5 >
    <table className='table3'>
        <tr>
        <th>s.no</th>
            <th>Orders</th>
            <th>Order Document</th>
        </tr>
        <tr>
        <th>1</th>
            <td>Rules for Inspection of Records, Fee Regulations, Acceptance of Postal Orders</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
    </table>

    <h5 className='GO'>5. Appointment of State Chief Information Commissioner</h5 >
    <table className='table3'>
        <tr>
        <th>s.no</th>
            <th>Orders</th>
            <th>Order Document</th>
        </tr>
        <tr>
        <th>1</th>
            <td>G.O.Ms.No. 505 GA (I&PR) Dept., Dated 12-11-2005 - Appointment of Sri C.D. Arha, IAS (Retd.)</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
        <tr>
        <th>2</th>
            <td>G.O.Ms.No. 393 GA (RTIA/GPMBAR) Dept., Dated 19-07-2010 - Appointment of Sri Jannat Husain, IAS (Retd.)</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
        <tr>
        <th>3</th>
            <td>G.O.Rt.No. 1997 GA (GPMBAR) Dept., Dated 17-07-2015 - Sri S. Prabhakar Reddy, IPS (Retd.), SIC Placed in FAC Post of CIC</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
        <tr>
        <th>4</th>
            <td>G.O.Rt.No. 3358 GA (GPMBAR) Dept., Dated 17-12-2015 - Sri M. Venkateswarlu, IPS (Retd.), SIC - Placed in FAC</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
        <tr>
        <th>5</th>
            <td>G.O.Rt.No. 2056 GA (GPMBAR) Dept., Dated 19-09-2016 - Sri Amar Kumar, IPS (Retd.), SIC - Placed in FAC for the Post of CIC</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
        <tr>
        <th>6</th>
            <td>G.O.Ms.No. 58 GA (AR) Dept., Dated 02-07-2020 - Appointment of Sri P. Ramesh Kumar, IAS (Retd.)</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
        <tr>
        <th>7</th>
            <td>G.O.Rt.No. 1338 GA (AR) Dept., Dated 06-07-2022 - Sri Regala Srinivasa Rao, SIC - Placed In-charge for the Post of CIC</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
        <tr>
        <th>8</th>
            <td>G.O.Ms.No. 128 GA (AR) Dept., Dated 21-10-2022 - Appointment of Sri R. Mahaboob Basha</td>
            <td><button onClick={handleDocumentClick}>Document</button></td>
        </tr>
    </table>
    

    <h5 className='GO'> 6: Appointment Orders</h5 >
    <table className='table3'>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Orders</th>
                <th>Order Document</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>G.O.Ms.No. 505 GA (JAPRI) Dept., Dated 12-11-2005 - Appointment of Sri A. Subba Rac, Sri R. Dileep Reddy Sudhakara Rao</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>G.O.Ms.No. 252 GA (RTIA/GPMBAR) Dept., Dated 10-05-2012 - Appointment of Sri C. Madhukar Raj. IFS (Retd.), Sri 5. Prabhakar Reddy, IPS (Retd.), Sri P. Vijay Babu, journalist, Sin M. Ratan, IPS (Retd)</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>3</td>
                <td>G.O.Ms.No. 75 GA (RTIA/GPM&AR) Dept., Dated 06-02-2015 - Appointment of Sri Varre Thanthiya Kumari, Sri Simtiyaz Ahmed, Smt. M. Vijaya Nirmala</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>4</td>
                <td>G.O.Ms.No. 129 GA (All) Dept., Date - Appointment of B.V. Ramana Kumar, IPS (Retd.), Set Katta janardhana Rao Kumar, IFS (Retd), Sri</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>5</td>
                <td>G.O.Ms.No. 49 GA (AR) Dept, Dated 2019 - Appointment of Sri Ilapuram Raja</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
        </tbody>
    </table>

    <h5 className='GO'> 7: Commissioner Orders</h5 >
    <table className='table3'>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Orders</th>
                <th>Order Document</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>G.O.Ms.No. 59 6A (AR) Dept., Dated 02-0 - Appointment of Se rinivasa Rao</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>G.O.Ms.No.53 GA (AR) Dept., Dated:25-05-2021 - Appointment of Sri U. Hari Prasada Reddy, Sri K Chenna Reddy</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>3</td>
                <td>G.O.Ms.No.129 GA (AR) Dept, Dated 21-10-2022 - Appointment of Sri F. Samuel Jonathan</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
        </tbody>
    </table>

    <h5 className='GO'>8: Annual Report Preparation</h5 >
    <table className='table3'>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Orders</th>
                <th>Order Document</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>G.O.Ms.No. 75 GA (AR) Dept Dated 08-02-2013 - Annual Report u/s 25 of the ETI Act, 2005</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>G.O.Ms.No. 75 GA (AR) Dept Dated 12-08-2021 - Annual Report Preparation</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
        </tbody>
    </table>

    <h5 className='GO'> 9: Public Authorities Information Publication</h5 >
    <table className='table3'>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Orders</th>
                <th>Order Document</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>G.O.Rt.No. 1964 SA (Poll) Dept, Dated 15-12-2020 - Publishing of information by Public Authorities - Revised Formats</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
        </tbody>
    </table>

    <h5 className='GO'>10: Holidays</h5>
    <table className='table3'>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Orders</th>
                <th>Order Document</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>G.O.Rt.No. 2692, General Administration (Poll B), Dated:15-12-2022 - Holidays for the Year 2023</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
            <tr>
                <td>2</td>
                <td>G.O.Rt.No. 2318, General Administration (Poll B), Dated:30-11-2023 - Holidays for the Year 2024</td>
                <td><button onClick={handleDocumentClick}>Document</button></td>
            </tr>
        </tbody>
    </table>


    </div>


    </div>
  );
};

export default GovernmentOrders;
