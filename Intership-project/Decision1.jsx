import { useEffect, useState } from "react";
const API_URL = "http://localhost:8080/decisions";
const Decision1 = () => {
    const [data, setData] = useState([]);
    const [yearlyQuarters, setYearlyQuarters] = useState(new Map()); // Stores { year: [{ id, quarter }] }

    useEffect(() => {
        // Simulating an API call
        fetch(`${API_URL}/get-all`) // Replace with your API URL
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                extractYearlyQuarters(json);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

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
        
        alert(`Quarter ${quarter} with ID ${id} clicked!`);
    };

    return (
        <div>
            <h2>API Response</h2>
            {data.length > 0 ? (
                data.map((item) => (
                    <div key={item.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                        <h3>Commissioner: {item.name || "N/A"}</h3>
                        {item.decision.length > 0 ? (
                            item.decision.map((decision, index) => (
                                <div key={index}>
                                    <h4>Year: {decision.year}</h4>
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        {/* Manually defining quarters */}
                                        {["Quarter I", "Quarter II", "Quarter III", "Quarter IV"].map((quarter) => {
                                            const foundQuarter = yearlyQuarters
                                                .get(decision.year)
                                                ?.find((q) => q.quarter === quarter);

                                            return (
                                                <div
                                                    key={quarter}
                                                    style={{
                                                        padding: "10px",
                                                        border: "1px solid black",
                                                        backgroundColor: foundQuarter ? "red" : "gray",
                                                        cursor: "pointer",
                                                        color: "white",
                                                        textAlign: "center",
                                                    }}
                                                    onClick={() => foundQuarter && handleQuarterClick(foundQuarter.id, foundQuarter.quarter)}
                                                >
                                                    {quarter} {foundQuarter ? `(ID: ${foundQuarter.id})` : ""}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p style={{ color: "gray" }}>No decisions available</p>
                        )}
                    </div>
                ))
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default Decision1;

