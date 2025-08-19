import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/decisions";

const Decision = () => {
  const [data, setData] = useState([]);
  const [yearlyQuarters, setYearlyQuarters] = useState(new Map());
  const [commissioners, setCommissioners] = useState([]);
  const [selectedCommissioner, setSelectedCommissioner] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedQuarter, setSelectedQuarter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCommissioners();
  }, []);

  const fetchCommissioners = async () => {
    try {
      const response = await axios.get(`${API_URL}/get-all`);
      setCommissioners(response.data);
      setData(response.data);
      extractYearlyQuarters(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to load data.");
      setLoading(false);
    }
  };

  const extractYearlyQuarters = (apiData) => {
    const tempMap = new Map();

    apiData.forEach((item) => {
      item.decision.forEach((decision) => {
        if (!tempMap.has(decision.year)) {
          tempMap.set(decision.year, []);
        }
        decision.decisionList.forEach((desc) => {
          tempMap.get(decision.year).push({ id: desc.id, quarter: desc.value });
        });
      });
    });

    setYearlyQuarters(tempMap);
  };

  const handleQuarterClick = (id, quarter) => {
    const url = `${API_URL}/get-file?id=${id}`;
    window.open(url, "_blank", "noopener noreferrer");
    
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Commissioner:", selectedCommissioner);
    console.log("Year:", selectedYear || "Not Selected");
    console.log("Quarter:", selectedQuarter || "Not Selected");
  };

  const handleReset = () => {
    setSelectedCommissioner("");
    setSelectedYear("");
    setSelectedQuarter("");
  };

  return (
    <div className="decision-container50">
      {/* Search Form Box */}
      <div className="decision-form-box50">
        <h2>Commissioners' Decisions</h2>
        <form className="decision-form50" onSubmit={handleSearch}>
          <label>Commissioner:</label>
          <select
            value={selectedCommissioner}
            onChange={(e) => setSelectedCommissioner(e.target.value)}
          >
            <option value="">Select Commissioner</option>
            {commissioners.map((comm) => (
              <option key={comm.id} value={comm.id}>
                {comm.name}
              </option>
            ))}
          </select>

          <label>Year:</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select Year</option>
            {[
              ...new Set(
                commissioners.flatMap((c) => c.decision.map((d) => d.year))
              ),
            ].map((yearValue) => (
              <option key={yearValue} value={yearValue}>
                {yearValue}
              </option>
            ))}
          </select>

          <label>Quarter:</label>
          <select
            value={selectedQuarter}
            onChange={(e) => setSelectedQuarter(e.target.value)}
          >
            <option value="">Select Quarter</option>
            <option value="Quarter I">Q1</option>
            <option value="Quarter II">Q2</option>
            <option value="Quarter III">Q3</option>
            <option value="Quarter IV">Q4</option>
          </select>
          <div className="decision-button-group50">
            <button type="submit" className="search-button50">
              Search
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="reset-button50"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Decision List Box */}
      <div className="decision-list-box50">
        {data.map((item) => (
          <div className="decision-item50" key={item.id}>
            <h3>{item.name || "N/A"}</h3>
            {item.decision.length > 0 ? (
              item.decision.map((decision, index) => (
                <div key={index}>
                  <h4 className="decision-year50">Year: {decision.year}</h4>
                  <div className="decision-quarters50">
                    {[
                      "Quarter I",
                      "Quarter II",
                      "Quarter III",
                      "Quarter IV",
                    ].map((quarter) => {
                      const foundQuarter = yearlyQuarters
                        .get(decision.year)
                        ?.find((q) => q.quarter === quarter);

                      return (
                        <button
                          key={quarter}
                          className={`decision-quarter-button50 ${
                            foundQuarter
                              ? "quarter-active50"
                              : "quarter-inactive50"
                          }`}
                          disabled={!foundQuarter}
                          onClick={() =>
                            foundQuarter &&
                            handleQuarterClick(
                              foundQuarter.id,
                              foundQuarter.quarter
                            )
                          }
                        >
                          {quarter}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <p style={{ color: "gray" }}>No decisions available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Decision;
