import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Edit, Trash2 } from "lucide-react";
import Swal from "sweetalert2";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    shortname: "",
    designation: "",
    searchName: "",
    searchDesignation: "",
  });

  const [allData, setAllData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [seniorityValues, setSeniorityValues] = useState({});
  const [designations, setDesignations] = useState([]);


  const fetchDesignations = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/commissioners2/unique-designations"
      );
      setDesignations(response.data);
    } catch (error) {
      console.error("Error fetching designations:", error);
    }
  }, []);

  
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      
      const response = await axios.get(
        `http://localhost:8080/commissioners2/allData?timestamp=${new Date().getTime()}`
      );

      const data = response.data;
      
      const initialSeniority = {};
      data.forEach((record) => {
        initialSeniority[record.id] = record.seniority || 0;
      });

      setSeniorityValues(initialSeniority);
      setAllData(data);
      setSearchResults(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    fetchDesignations();
  }, [fetchData, fetchDesignations]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    try {
      await axios.post("http://localhost:8080/commissioners2/save", formData);

      Swal.fire("Success", "Commissioner added successfully!", "success");

     
      fetchData().then(() => {
        setFormData({
          name: "",
          shortname: "",
          designation: "",
          searchName: "",
          searchDesignation: "",
        });
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire("Error", "Failed to add commissioner.", "error");
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredResults = allData.filter((record) => {
      const matchesName = formData.searchName
        ? record.name.toLowerCase().includes(formData.searchName.toLowerCase())
        : true;

      const matchesDesignation = formData.searchDesignation
        ? record.designation === formData.searchDesignation
        : true;

      return matchesName && matchesDesignation;
    });

    setSearchResults(filteredResults);
  };

  const handleReset = () => {
    setFormData({ ...formData, searchName: "", searchDesignation: "" });
    setSearchResults(allData);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
     
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `http://localhost:8080/commissioners2/delete/${id}`
          );
          Swal.fire("Deleted!", "Commissioner has been deleted.", "success");
          fetchData();
        } catch (error) {
          console.error("Error deleting record:", error);
          Swal.fire("Error!", "Failed to delete.", "error");
        }
      }
    });
  };

  const handleSeniorityChange = (id, value) => {
    setSeniorityValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSeniorityUpdate = async (id) => {
    const newSeniority = seniorityValues[id];

    try {
      await axios.put(
        `http://localhost:8080/commissioners2/update-seniority/${id}`,
        {
          seniority: newSeniority,
        }
      );

      Swal.fire("Updated!", "Seniority has been updated.", "success");
      fetchData();
    } catch (error) {
      console.error("Error updating seniority:", error);
      Swal.fire("Error!", "Failed to update seniority.", "error");
    }
  };

  return (
    <div className="register-container2">
      <div className="register-form2">
        <h4 className="register-title2">Register Commissioners & FAA</h4>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group2">
            <label className="input-label2">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              className="input-field2"
              required
            />
          </div>
          <div className="input-group2">
            <label className="input-label2">Short Name:</label>
            <input
              type="text"
              name="shortname"
              placeholder="Enter short name"
              value={formData.shortname}
              onChange={handleChange}
              className="input-field2"
              required
            />
          </div>
          <div className="input-group2">
            <label className="input-label2">Designation:</label>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="input-select2"
              required
            >
              <option value="">Select Designation</option>
              {designations.map((designation) => (
                <option key={designation} value={designation}>
                  {designation}
                </option>
              ))}
            </select>
          </div>
          <div className="form-actions2">
            <button type="submit" className="btn btn-search2">Save</button>
            <button type="button" onClick={handleReset} className="btn btn-reset2">Cancel</button>
          </div>
        </form>
      </div>

      <div className="search-container2">
        <h4 className="search-title2">Search Commissioners & FAA</h4>
        <form onSubmit={handleSearch} className="search-form2">
          <div className="input-group2">
            <label className="input-label2">Name:</label>
            <input
              type="text"
              name="searchName"
              placeholder="Enter name to search"
              value={formData.searchName}
              onChange={handleChange}
              className="input-field2"
            />
          </div>
          <div className="input-group2">
            <label className="input-label2">Designation:</label>
            <select
              name="searchDesignation"
              value={formData.searchDesignation}
              onChange={handleChange}
              className="input-select2"
            >
              <option value="">Select Designation</option>
              {designations.map((designation) => (
                <option key={designation} value={designation}>
                  {designation}
                </option>
              ))}
            </select>
          </div>
          <div className="form-actions2">
            <button type="submit" className="btn btn-search2">Search</button>
            <button type="button" onClick={handleReset} className="btn btn-reset2">Reset</button>
          </div>
        </form>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="results-container2">
          <h4 className="results-title2">List of Commissioners & FAA</h4>
          <div className="table-wrapper">
            <table className="results-table2">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Seniority</th>
                  <th>Update</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((record, index) => (
                  <tr key={record.id}>
                    <td>{index + 1}</td>
                    <td>{record.name}</td>
                    <td>{record.designation}</td>
                    <td>
                      <select
                        value={seniorityValues[record.id]}
                        onChange={(e) => handleSeniorityChange(record.id, e.target.value)}
                      >
                        {[...Array(11).keys()].map((num) => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <button onClick={() => handleSeniorityUpdate(record.id)}>Update</button>
                    </td>
                    <td>
                      <Trash2 onClick={() => handleDelete(record.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;

