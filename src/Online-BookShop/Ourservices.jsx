import React from "react";
import slide10 from "../Images/slide10.jpg";

const Faq = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <img src={slide10} className="slide10" alt='' />
          </div>
          <div className="col-md-6 offset-md-3">
            <div className="card servicescard">
              <div className="card-body servicescardbody">
                <div className="ourservices">OUR SERVICES</div>
                <div className="ourcustomers">
                  <div className="servicepoints">
                    <span> 1. </span>
                    <span>
                      Provide different book softcopy to customers at cheaper
                      price
                    </span>
                  </div>
                  <div className="servicepoints">
                    <span> 2. </span>
                    <span>
                      Home delivery of Hard copy books ordered by customer at
                      cheaper price
                    </span>
                  </div>
                  <div className="servicepoints">
                    <span> 3. </span>
                    <span>
                      Immediate response to customer's complains and suggestions
                    </span>
                  </div>
                  <div className="servicepoints">
                    <span> 4. </span>
                    <span>Provide Advice on any book related issues</span>
                  </div>
                  <div className="servicepoints dailydosage">
                    <span> 5. </span>
                    <span>
                      Daily dosage of wisdom to customer's email from different
                      books
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
