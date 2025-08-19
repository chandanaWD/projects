import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import WorkAlloction from "./WorkAllocation";
import RTIAct from "./RTIAct";
import API4 from "./API4";
import APICVoluntaryDisclosure from "./APICVoluntaryDisclosure";
import GovernmentOrders from "./GovernmentOrders";
import Circulars from "./Circulars";
import BasicDetails from "./BasicDetails";
import Objectives from "./Objectives";
import Appeals from "./Appeals";
import Penalties from "./Penalties";
import Procedure from "./Procedure";
import FAQ from "./FAQ";
import Contact from "./Contact";

import Profile from "./Profile";
import MahaboobProfile from "./MahaboobProfile";
import SamuelProfile from "./SamuelProfile";
import ChavaliProfile from "./ChavaliProfile";
import Button3 from "./Button3";
import CitizenService from "./CitizenService";
import CauseList from "./CauseList";
import Decision from "./Decision";
import Login from "./Login";
import Help from "./Help";
import Layout from "./Layout";
import Home from "./Home";
import Register from "./Register";
import Cause from "./Cause";
import Decisions from "./Decisions";
import UseFulLinksGovt from "./UseFulLinksGovt";


const App = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };
  

  return (
    <Router>
      <div className="header-container">
        <div className="top-strip">
          <h6>Change/language</h6>
        </div>

        <div className="text-container">

          <h1 className="title">ANDHRA PRADESH INFORMATION COMMISSION</h1>
          <h2 className="subtitle">ఆంధ్ర ప్రదేశ్ సమాచార కమిషన్</h2>
        </div>

        <div className="image-container">
          <img
            className="rti-image"
            src="rti img.jpg"
            alt="Right to Information Act"
          />
        </div>

        <div className="logo">
          <img className="logo-img" src="logo.jpg" alt="logo" />
        </div>

        <div className="nav-strip">
          <ul className="nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">About Us ▼</a>
              {openDropdown === "about" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/who-we-are">Who We Are?</Link>
                  </li>
                  <li>
                    <Link to="/what-we-do">What We Do?</Link>
                  </li>
                  <li>
                    <Link to="/Work-Allocation">Work Allocation</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter("rti")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">RTI in APIC ▼</a>
              {openDropdown === "rti" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/rti-act">RTI Act</Link>
                  </li>
                  <li>
                    <Link to="/api-4">API 4(1)(B)</Link>
                  </li>
                  <li>
                    <Link to="/rti-apic-voluntary-disclosure">
                      APIC Voluntary Disclosure
                    </Link>
                  </li>
                  <li>
                    <Link to="/government-orders">Government Orders</Link>
                  </li>
                  <li>
                    <Link to="/circulars">Circulars</Link>
                  </li>
                </ul>
              )}
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter("links")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#"><Link to="UseFullinksGovt">Useful Links</Link> </a>
              
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => handleMouseEnter("highlights")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#">Highlights of ACT ▼</a>
              {openDropdown === "highlights" && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/basic-details">Basic Details</Link>
                  </li>
                  <li>
                    <Link to="/objectives">Objectives</Link>
                  </li>
                  <li>
                    <Link to="/appeals">Appeals</Link>
                  </li>
                  <li>
                    <Link to="/penalties">Penalties</Link>
                  </li>
                  
                </ul>
              )}
            </li>

            <li>
              <Link to="/procedure">Procedure for Request</Link>{" "}
            </li>
            <li>
              <Link to="/FAQ">FAQs</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="rti-banner">
                  <div
                    id="carouselExampleInterval"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active" data-bs-interval="1000">
                        <img src="slide1.jpg" class="d-block w-100" alt="..." />
                      </div>
                      <div class="carousel-item" data-bs-interval="2000">
                        <img src="slide2.jpg" class="d-block w-100" alt="..." />
                      </div>
                      <div class="carousel-item" data-bs-interval="">
                        <img
                          src="slide3.jpg"
                          class="d-block w-100 "
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item active">
                        <img src="slide4.jpg" class="d-block w-100" alt="..." />
                      </div>
                      <div class="carousel-item active">
                        <img src="slide7.jpg" class="d-block w-100" alt="..." />
                      </div>
                      <div class="carousel-item active">
                        <img src="slide5.jpg" class="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleInterval"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleInterval"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

                <div className="content">
                  <h1 className="welcome">Welcome</h1>
                  <p className="matter">
                    Government of Andhra Pradesh has Constituted Andhra Pradesh
                    Information Commission to exercise the power conferred on
                    and to perform the functions assigned to it under Right to
                    Information Act, 2005.
                    <br />
                    <br />
                    Andhra Pradesh Information Commission as a quasi-judicial
                    body decides the Complaints and Second Appeals filed under
                    Right to Information Act, 2005.
                    <br />
                    The jurisdiction of the Commission extends over all Andhra
                    Pradesh State Public Authorities.
                    <br />
                    <br />
                    Sri R. Mahaboob Basha - State Chief Information
                    Commissioner.
                    <br />
                    Sri P. Samuel Jonathan, Sri Chavali Suneel, Smt Rehana
                    Begum, and Dr. Allareddy Uday Bhaskar Reddy are the State
                    Information Commissioners.
                    <br />
                    <br />
                  </p>

                  <div className="buttons-container">
                    <button className="profile-btn">
                      <Link to="/Profile">Chief IC/State IC's Profile</Link>
                    </button>
                    <button className="work-allocation-btn">
                      <Link to="/work-allocation-state cic">
                        Work Allocation-State Chief IC/State IC's
                      </Link>
                    </button>
                    <button className="former-btn">
                      <Link to="/Button3">
                        Former-State Chief IC's/State IC's
                      </Link>
                    </button>
                  </div>
                  <div className="row row-cols-1 row-cols-md-6 g-4 p-3 my-3">
                    {[
                      {
                        name: "Citizen Service",
                        image: "/citizen-service.jpg",
                        link: "/citizen-service",
                      },
                      {
                        name: "Cause List",
                        image: "causelist.png",
                        link: "/cause-list",
                      },
                      {
                        name: "Decision",
                        image: "decision2.png",
                        link: "/Decision-list",
                      },
                      {
                        name: "RTI Disclosure",
                        image: "rti1.png",
                        link: "/rti",
                      },
                      { name: "Logins",
                         image: "login1.png", 
                         link: "/login" },
                      { name: "Help", 
                        image: "help3.jpg", 
                        link: "/help" },
                    ].map((box, index) => (
                      <div className="col" key={index}>
                        <div className="info-box fancy">
                          <div className="fancy-input">
                            {box.link ? (
                              <Link to={box.link} >
                                <img
                                  src={box.image}
                                  alt={box.name}
                                  className="box-image"
                                />
                                <h3>{box.name}</h3>
                                
                              </Link>
                            ) : (
                              <>
                                <img
                                  src={box.image}
                                  alt={box.name}
                                  className="box-image"
                                />
                                <h3>{box.name}</h3>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          />

          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/Work-Allocation" element={<WorkAlloction />} />

          <Route path="/rti-act" element={<RTIAct />} />
          <Route path="/api-4" element={<API4 />} />
          <Route path="/rti-apic-voluntary-disclosure" element={<APICVoluntaryDisclosure />} />
          
         
          <Route path="/government-orders" element={<GovernmentOrders />} />
          <Route path="/UseFullinksGovt" element={<UseFulLinksGovt />} />

          <Route path="/circulars" element={<Circulars />} />

          <Route path="/basic-details" element={<BasicDetails />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/appeals" element={<Appeals />} />
          <Route path="/penalties" element={<Penalties />} />

          <Route path="/procedure" element={<Procedure />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/Profile" element={<Profile />} />
          <Route path="/mahaboob-profile" element={<MahaboobProfile />} />
          <Route path="/samuel-profile" element={<SamuelProfile />} />  
          <Route path="/chavali-profile" element={<ChavaliProfile />} /> 

          <Route path="/Button3" element={<Button3 />} />
          <Route
            path="/work-allocation-state cic"
            element={<WorkAlloction />}
          />
          <Route path="/citizen-service" element={<CitizenService />} />
          <Route path="/Cause-List" element={<CauseList />} />
          <Route path="/Decision-List" element={<Decision />} />
          <Route path="/rti" element={<API4 />} />
          <Route path="/login" element={<Login />} />

          <Route path="/help" element={<Help />} />
          <Route path="/cause-list" element={<CauseList />} />
          <Route path="/decision" element={<Decision />} />
          <Route path="/help1" element={<Help />} />
    
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Layout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/cause" element={<Cause/>}/>
           <Route path="/decisions" element={<Decisions/>}/>
          <Route path="logout" element={<Login/>}/>
          </Route>
          
     
     
        </Routes>

        <footer className="footer ">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <h5 className="addr">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>{" "}
                Our Address
              </h5>
              <p className="sub addr">
                1st Floor MGM Capital <br />
                Chinnakakani(Village)
                <br />
                Mangalagiri(Mandal)
                <br />
                Guntur District-522503.
              </p>
            </div>

            <div className="col">
              <h5 className="contactus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                  />
                </svg>{" "}
                Contact Us
              </h5>
              <p>
                {" "}
                <bold>Phone:</bold>08632387345{" "}
              </p>

              <h5 className="email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>{" "}
                Email ID
              </h5>
              <p>
                {" "}
                <bold>email:</bold>sic-ap@gov.in
              </p>
            </div>

            <div className="col">
              <h5 className="time ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                </svg>{" "}
                Timing
              </h5>
              <p>10:00AM to 5:30PM</p>

              <h5> Lunch Break </h5>
              <p>01:30PM to 2:30PM</p>
            </div>

            <div className="col">
              <h5>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-calendar3"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>{" "}
                Working Day
              </h5>
              <p> Monday to Friday</p>

              <h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"
                  />
                </svg>{" "}
                Location
              </h5>
              <img src="qr.png" alt="qr code" />
            </div>
          </div>
          <p className="last">
            &copy; 2025 Andhra Pradesh Information Commission. All Rights
            Reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
