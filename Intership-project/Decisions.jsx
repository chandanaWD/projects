import React, { useState, useEffect } from 'react';

const API_URL = 'http://localhost:8080/decisions';

const Decisions = () => {
  const [commissioners, setCommissioners] = useState([]);
  const [selectedCommissioner, setSelectedCommissioner] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedQuarter, setSelectedQuarter] = useState('');
  const [file, setFile] = useState(null);

  const [searchCommissioner, setSearchCommissioner] = useState('');
  const [searchYear, setSearchYear] = useState('');

  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchCommissioners = async () => {
    try {
      const response = await fetch(`${API_URL}/names`);
      if (!response.ok) {
        throw new Error('Failed to fetch commissioners');
      }
      const data = await response.json();
      setCommissioners(data);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const fetchRecords = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/all-decision`);
      if (!response.ok) {
        throw new Error('Failed to fetch records');
      }

      const data = await response.json();
      setRecords(
        data.map((item, index) => ({
          id: item.id,
          commissioner: item.commissioner_name || 'N/A',
          year: item.year || 'N/A',
          quarter: item.quarter || 'N/A',
          file: item.decisions_file || 'No file',
          createdAt: item.created_at || 'N/A',
          sno: index + 1
        }))
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

 
  const handleSave = async () => {
    const formData = new FormData();
    formData.append('commissionerId', selectedCommissioner);
    formData.append('year', selectedYear);
    formData.append('quarter', selectedQuarter);
    
    if (file) formData.append('file', file);
    try {
      const response = await fetch('http://localhost:8080/decisions/create', {
        method: 'POST',
        body: formData
      });
  
      if (!response.ok) {
        throw new Error('Failed to save data');
      }
  
      alert('Decision uploaded successfully!');
      handleCancel();
      fetchRecords();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };
  
    

  const handleCancel = () => {
    setSelectedCommissioner('');
    setSelectedYear('');
    setSelectedQuarter('');
    setFile(null);
    setEditId(null);
  };

  const handleEdit = (record) => {
    setEditId(record.id);
    setSelectedCommissioner(record.commissioner);
    setSelectedYear(record.year);
    setSelectedQuarter(record.quarter);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this record?')) return;

    try {
      const response = await fetch(`${API_URL}/delete/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete record');
      }

      alert('Decision deleted successfully!');
      fetchRecords();
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  const handleSearch = () => {
    const filtered = records.filter(
      (record) =>
        (!searchCommissioner ||
          record.commissioner
            .toLowerCase()
            .includes(searchCommissioner.toLowerCase())) &&
        (!searchYear || record.year.includes(searchYear))
    );
    setRecords(filtered);
  };

  const handleReset = () => {
    setSearchCommissioner('');
    setSearchYear('');
    fetchRecords();
  };

  return (
    <div>
      <div className="decisions-container22">
        
        
        <h2 className="decisions-title22">{editId ? 'Edit' : 'Upload'} Decision</h2>
        <div className="decisions-box22">
          <div className="form-group22">
            <label>Commissioner/FAA:</label>
            <select
              value={selectedCommissioner}
              onChange={(e) => setSelectedCommissioner(e.target.value)}
              onClick={fetchCommissioners}  
            >
              <option value="">Select Commissioner/FAA</option>
              {commissioners.map((comm, index) => (
                <option key={index} value={comm.id}>
                  {comm.salutationWithName}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group22">
            <label>Year:</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="">Select Year</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>

          <div className="form-group22">
            <label>Quarter:</label>
            <select
              value={selectedQuarter}
              onChange={(e) => setSelectedQuarter(e.target.value)}
            >
              <option value="">Select Quarter</option>
              <option value="Quarter 1">Quarter 1</option>
              <option value="Quarter 2">Quarter 2</option>
              <option value="Quarter 3">Quarter 3</option>
              <option value="Quarter4">Quarter 4</option>
            </select>
          </div>

          <div className="form-group22">
            <label>Upload Order:</label>
            <input type="file" onChange={handleFileChange} />
          </div>

          <div className="button-group22">
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-btn" onClick={handleReset}>
              Cancel
            </button>
          </div>
        </div>

        <h2 className="decisions-title22">Search Decisions</h2>
        <div className="search-box22">
          <div className="form-group22">
            <label>Commissioner/FAA:</label>
            <input
              type="text"
              value={searchCommissioner}
              onChange={(e) => setSearchCommissioner(e.target.value)}
              placeholder="Enter Commissioner"
            />
          </div>

          <div className="form-group22">
            <label>Year:</label>
            <input
              type="text"
              value={searchYear}
              onChange={(e) => setSearchYear(e.target.value)}
              placeholder="Enter Year"
            />
          </div>

          <div className="button-group22">
            <button className="search-btn22" onClick={handleSearch}>
              Search
            </button>
            <button className="reset-btn22" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>

{loading ? (
  <p>Loading...</p>
) : error ? (
  <p style={{ color: 'red' }}>{error}</p>
) : (
  <div className="table-wrapper">
    <table className="records-table22">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Commissioner</th>
          <th>Year</th>
          <th>Quarter</th>
          <th>File</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <tr key={record.id}>
            <td>{record.sno}</td>
            <td>{record.commissioner}</td>
            <td>{record.year}</td>
            <td>{record.quarter}</td>
            <td> 
                    <a
                      href={`http://localhost:8080/decisions/get-file?id=${record.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     view
                    </a>
                  </td>
            <td>
              <button onClick={() => handleEdit(record)}>Edit</button>
              <button onClick={() => handleDelete(record.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  
)}
</div>

</div>

  );
};

export default Decisions;
