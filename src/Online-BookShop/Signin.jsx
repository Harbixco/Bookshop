import React from "react";
import { Link } from "react-router-dom";
import slide2 from "../Images/slide2.jpg";

const Signin = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <div className="userLogin">User Login</div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Username
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Username"
              />
            </div>

            <div className="mb-3 row">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <div>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn form-control Loginbtn"
              style={{ backgroundColor: "#254a71", color: "white" }}
            >
              Login
            </button>
            <div className="donthave">
              Don't have an account?
              <Link to="/RegSign" className="signup">
                <span>Sign Up</span>
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <img src={slide2} className="slide2" alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
