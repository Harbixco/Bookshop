/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import slide9 from "../Images/slide9.jpg";
import slide6 from "../Images/slide6.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <img src={slide9} className="slide9" alt="" />
          </div>
          <div className="col-md-5 offset-md-2">
            <div className="card aboutcard">
              <div className="card-body abouutcardbody">
                <div className="aboutus">ABOUT US</div>
                <div className="wehave">
                  We have track record of been the best in online BookShop
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="first-text">
              The online bookstore was created and it has gained much popularity
              with consumers in recent years. Online bookstores offer the savvy
              shopper a host of benefits, from customer convenience and access
              to a greater variety of books to significant cost savings. Here
              are some of the greatest advantages of shopping at an online
              bookstore.
            </div>
            <div className="first-text">
              The average online bookstore offers the consumer huge savings over
              traditional brick and mortar stores. They are able to pass on
              these savings to you for a variety of reasons. Rental costs for
              online stores tend to be cheaper, as they operate out of
              warehouses rather than in prime retail space. Some stores also
              contract directly with suppliers, forwarding customer orders
              directly, which eliminates inventory costs as well.
            </div>
          </div>
          <div className="col-md-4">
            <img src={slide6} className="slide6" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
