import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Cause = () => {
  const [commissioners, setCommissioners] = useState([]);
  const [selectedCommissioner, setSelectedCommissioner] = useState("");
  const [hearingDate, setHearingDate] = useState("");
  const [causelistName, setCauselistName] = useState("");
  const [file, setFile] = useState(null);

  const [searchCommissioner, setSearchCommissioner] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(0);
  const [size] = useState(10);

  useEffect(() => {
    fetchCommissioners();
    fetchRecords();
  }, [page]);

  const fetchCommissioners = async () => {
    try {
      const res = await axios.get("http://localhost:8080/commissioners2/allData");
      setCommissioners(res.data);
    } catch (error) {
      console.error("Failed to fetch commissioners:", error);
      Swal.fire("Error", "Failed to load commissioners.", "error");
    }
  };

  const fetchRecords = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get("http://localhost:8080/causelist/all");
      setRecords(res.data);
      setFilteredRecords(res.data);
    } catch (error) {
      console.error("Failed to fetch records:", error);
      Swal.fire("Error", "Failed to load records.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCreate = async () => {
    if (!selectedCommissioner || !hearingDate || !causelistName) {
      Swal.fire("Warning", "Please fill all fields.", "warning");
      return;
    }

    const formData = new FormData();
    formData.append("commissionerId", selectedCommissioner);
    formData.append("dateOfHearing", hearingDate);
    formData.append("causelistName", causelistName);

    if (file) {
      formData.append("file", file);
    }

    try {
      await axios.post("http://localhost:8080/causelist/create", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      Swal.fire("Success", "Cause list created successfully!", "success");
      fetchRecords();
    } catch (error) {
      console.error("Failed to create cause list:", error);
      Swal.fire("Error", "Failed to create cause list.", "error");
    }
  };

  const handleUpdate = async (id) => {
    if (!selectedCommissioner || !hearingDate || !causelistName) {
      Swal.fire("Warning", "Please fill all fields.", "warning");
      return;
    }

    const updatedCauseList = {
      commissionerId: parseInt(selectedCommissioner),
      dateOfHearing: hearingDate,
      causelistName: causelistName,
    };

    try {
      await axios.put(`http://localhost:8080/causelist/update/${id}`, updatedCauseList);
      Swal.fire("Success", "Cause list updated successfully!", "success");
      fetchRecords();
    } catch (error) {
      console.error("Failed to update cause list:", error);
      Swal.fire("Error", "Failed to update cause list.", "error");
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:8080/causelist/delete/${id}`);
          Swal.fire("Deleted!", "The record has been deleted.", "success");
          fetchRecords();
        } catch (error) {
          console.error("Failed to delete cause list:", error);
          Swal.fire("Error", "Failed to delete record.", "error");
        }
      }
    });
  };

  const handleSearch = () => {
    let filtered = records;

    if (searchCommissioner) {
      filtered = filtered.filter(
        (record) =>
          record.commissionerName?.toLowerCase().includes(searchCommissioner.toLowerCase())
      );
    }

    if (searchDate) {
      filtered = filtered.filter(
        (record) => record.dateOfHearing === searchDate
      );
    }

    setFilteredRecords(filtered);

    Swal.fire("Search Completed", `${filtered.length} record(s) found.`, "info");
  };

  const handleReset = () => {
    setSearchCommissioner("");
    setSearchDate("");
    setFilteredRecords(records);
    Swal.fire("Reset", "Filters have been cleared.", "success");
  };

  return (
    <div className="cause-container32">
      <header className="cause-header32">
        <h2>Cause List</h2>
      </header>

      {/* 1. Upload Section */}
      <div className="upload-section32">
        <h3>Upload Cause List</h3>

        <div className="form-group32">
          <label>Commissioner/FAA:</label>
          <select
            value={selectedCommissioner}
            onChange={(e) => setSelectedCommissioner(e.target.value)}
          >
            <option value="">Select Commissioner</option>
            {commissioners.map((com) => (
              <option key={com.id} value={com.id}>
                {com.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group32">
          <label>Date of Hearing:</label>
          <input
            type="date"
            value={hearingDate}
            onChange={(e) => setHearingDate(e.target.value)}
          />
        </div>

        <div className="form-group32">
          <label>Cause List Name:</label>
          <input
            type="text"
            value={causelistName}
            onChange={(e) => setCauselistName(e.target.value)}
          />
        </div>

        <div className="form-group32">
          <label>Upload File (optional):</label>
          <input type="file" onChange={handleFileChange} />
        </div>

        <div className="button-group32">
          <button onClick={handleCreate}>Save</button>
          <button onClick={handleReset}>Cancel</button>
        </div>
      </div>

      {/* 2. Search Section */}
      <div className="search-section32">
        <h3>Search Cause List</h3>

        <div className="form-group32">
          <label>Commissioner/FAA:</label>
          <input
            type="text"
            value={searchCommissioner}
            onChange={(e) => setSearchCommissioner(e.target.value)}
          />
        </div>

        <div className="form-group32">
          <label>Date of Hearing:</label>
          <input
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
          />
        </div>

        <div className="button-group32">
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>

      {/* 3. Cause List Table */}
      <div className="records-section32">
        <h3>Cause List Records</h3>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Commissioner</th>
              <th>Date of Hearing</th>
              <th>Cause List</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.commissionerName}</td>
                <td>{record.dateOfHearing}</td>
                <td>
                 
                    <a
                      href={`http://localhost:8080/causelist/get-file?id=${record.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     view
                    </a>
                  
                </td>
                <td>
                  <button onClick={() => handleUpdate(record.id)}>Edit</button>
                  <button onClick={() => handleDelete(record.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cause;

























