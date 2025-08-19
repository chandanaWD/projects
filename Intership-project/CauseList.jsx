import React, { useState } from "react";

const CauseList = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [commissioners, setCommissioners] = useState([]);
  const [hearingDates, setHearingDates] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("From Date:", fromDate);
    console.log("To Date:", toDate);

    if (!fromDate || !toDate) {
      alert("Please select both from and to dates.");
      return;
    }

    setIsLoading(true);

    await fetchCommissionersAndHearingDates(fromDate, toDate);

    setIsLoading(false);
  };

  const handleReset = () => {
    setFromDate("");
    setToDate("");
    setCommissioners([]);
    setHearingDates({});
  };

  const fetchCommissionersAndHearingDates = async (fromDate, toDate) => {
    try {
      const commissionersResponse = await fetch(
        "http://localhost:8080/commissioners2/cause-list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ startDate: fromDate, endDate: toDate }),
        }
      );
      if (!commissionersResponse.ok) {
        console.error("Failed to fetch commissioners", commissionersResponse.status);
        return;
      }

      const commissionersData = await commissionersResponse.json();
      console.log("Commissioners Data:", commissionersData);

      if (!commissionersData || commissionersData.length === 0) {
        console.log("No commissioners data available.");
        return;
      }

      setCommissioners(commissionersData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
     
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h5 className="heading7">Cause List</h5>

          <div>
            <label htmlFor="fromDate" className="search">
              <strong>From Date:</strong>
            </label>
            <input
              type="date"
              id="fromDate"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="toDate" className="reset">
              <strong>To Date:</strong>
            </label>
            <input
              type="date"
              id="toDate"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="search" disabled={isLoading}>
            {isLoading ? "Loading..." : "Search"}
          </button>
          <button type="button" className="reset" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>

      <div className="commissioner-container">
        
        <ul>
          {commissioners.map((commissioner) => (
            <li key={commissioner.id}>
              <div className="commissioner-name">{commissioner.name}</div>
              {commissioner.causeList.length > 0 ? (
                <div className="hearing-dates">
                  {commissioner.causeList.map((cause, index) => (
                    <button key={index} className="hearing-button" 
                    onClick={()=>{
                      const url = `http://localhost:8080/causelist/get-file?id=${cause.id}`;
                      window.open(url, '_blank', 'noopener noreferrer');
                    }}>
                       <strong>Date of Hearing : </strong>

                      {cause.date_of_hearing}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="no-hearings">No hearings scheduled.</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CauseList;
