import React from "react";
import Ourservices from "./Ourservices";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Signin from "./Signin";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div id="Home" className="banner">
        <div className="wrapper">
          <div className="first-quote">
            A reader lives a thousand lives before he dies
          </div>
          <div className="second-quote">
            The man who never reads lives only one.
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 offset-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search for favourite book"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="quote1">
        “Show me a family of readers, and I will show you the people who move
        the world.”
      </div>
      <div className="author1"> ― Napoleon Bonaparte</div>
      <div id="Signin">
        <Signin />
      </div>
      <div className="quote1">
        “Read different to think differently; world is already into rat race.”
      </div>
      <div className="author1"> ― Aman Jassal, Rainbow</div>
      <div id="AboutUs">
        <AboutUs />
      </div>
      <div className="quote1">
        “Reading is essential for those who seek to rise above the ordinary.”
      </div>
      <div className="author1"> ― Jim Rohn</div>
      <div id="Ourservices">
        <Ourservices />
      </div>

      <div id="ContactUs">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
