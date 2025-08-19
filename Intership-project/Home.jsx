import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);  
    } else {
      navigate("/");  
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userName");  
    navigate("/");
  };

  return (
    <div className="home-container">
      <aside className="sidebar23">
        <h3 className="welcome-message">Welcome: {userName}</h3>  
        
        <nav className="navigation23">
          <ul>
            <li><Link to="/Register" >Register Commissioners & FAA</Link></li>
            <li><Link to="/cause">Causelist</Link></li>
            <li><Link to="/decisions">Decisions</Link></li>
            <li>
              <button onClick={handleLogout} className="logout">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                </svg> Log Out
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="main-content23">
        <header className="login-heading23">
          <img src="GOVT-LOGO.jpeg" alt="APIC Logo" className="GOVT-LOGO" />
          <h2>Welcome</h2>
          <h3>ANDHRA PRADESH INFORMATION COMMISSION</h3>
        </header>
      </div>
    </div>
  );
};

export default Home;
