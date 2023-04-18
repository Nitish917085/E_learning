import React, { useState } from "react";
import "./Navbar.css";
import img1 from "../assets/bell.svg";
import img2 from "../assets/Su.svg";
import img3 from "../assets/images.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "./redux/actions";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  const dipatch=useDispatch();
  const navigate=useNavigate();
  const handlelogout=()=>{
    logOut();
    navigate('/logreg')
  }

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div className="container-fluid mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
          <div className="container-fluid p-2">
            <Link to="/">
              <a className="navbar-brand text-primary mr-0">My Courses</a>
            </Link>

            <div className="form-inline ml-auto">
              <div
                className="btn btn-primary"
                style={{ backgroundColor: "#ebf2f0" }}
              >
                <img src="https://unsplash.com/photos/bF2vsubyHcQ" alt="igm2" />
                <span style={{ backgroundColor: "#ebf2f0" }}> Get Help</span>
              </div>

              <div className="btn ">
                <img src={img1} alt="hii" />
                <i className="fa-regular fa-location-question"></i>
              </div>

              <div className="btn">
                <i class="fa-regular fa-comments-question-check"></i>
                <img
                  src={img3}
                  style={{ width: "25px", height: "25px", color: "white" }}
                />
                <span> name</span>
              </div>

              <div className="btn btn-primary" onClick={ToggleSidebar}>
                <i className="fa fa-bars"></i>
              </div>
            </div>
          </div>
        </nav>

        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            <img src="https://cdn.pegasus.imarticus.org/images/imarticus-new-logo.svg" />
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <i className="fa fa-times"></i>
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <Link to="/">
                  <a className="sd-link">My Courses</a>
                </Link>
              </li>
              <li>
                <a className="sd-link">My Groups</a>
              </li>
              <li>
                <a className="sd-link">Explore</a>
              </li>
              <li>
                <hr
                  style={{ backgroundColor: "white", marginTop: "220px" }}
                ></hr>
              </li>
              <li>
               <button onClick={()=>{handlelogout()}}>Log out</button>
                <a
                  className="sd-link"
                  style={{
                    bottom: "100px",
                    width: "90%",
                    pointerEvents: "none",
                    fontSize: "13px",
                  }}
                >
                  Facing problems?
                </a>
              </li>
              <li>
                <a
                  className="sd-link"
                  style={{
                    bottom: "50px",
                    width: "90%",
                    backgroundColor: "#196355",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  Get Help
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
};

export default Navbar;
