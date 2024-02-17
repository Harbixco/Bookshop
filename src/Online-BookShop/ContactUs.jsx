import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import NigeriaOffice from "./NigeriaOffice";
import UkOffice from "./UkOffice";

const ContactUs = () => {
  return (
    <>
      <div className="container-fluid ContacusComp">
        <div className="row">
          <div className="col-md-4">
            <UkOffice />
            <div></div>
          </div>
          <div className="col-md-4">
            <NigeriaOffice />
          </div>

          <div className="col-md-4">
            <div className="united">Quick Links</div>
            <div>
              <Link to="/#top">
                <button
                  className="btn"
                  style={{ color: "white", marginTop: "15px" }}
                >
                  Home
                </button>
              </Link>
            </div>

            <div>
              <Link to="/#Signin">
                <button
                  className="btn bt"
                  style={{ color: "white", marginTop: "8px" }}
                >
                  Sign In
                </button>
              </Link>
            </div>

            <div>
              <Link to="/#AboutUs">
                <button
                  className="btn"
                  style={{ color: "white", marginTop: "8px" }}
                >
                  About Us
                </button>
              </Link>
            </div>

            <div>
              <Link to="/#Ourservices">
                <button
                  className="btn"
                  style={{ color: "white", marginTop: "8px" }}
                >
                  Our Services
                </button>
              </Link>
            </div>

            <div>
              <Link to="/#ContactUs">
                <button
                  className="btn"
                  style={{ color: "white", marginTop: "8px" }}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
