import React from "react";
import { Icon } from "@iconify/react";

const UkOffice = () => {
  return (
    <>
      <div className="united">United Kingdom Office</div>
      <div> 5b, off San Fransico,</div>
      <div>Street: 97 Thirsk Road</div>
      <div>Blairingone, United Kingdom</div>
      <div className="icon">
        <span>
          <Icon style={{ fontSize: "24px" }} icon="fluent:call-32-regular" />
        </span>
        <span>
          <a
            href="tel: +2349039415354"
            style={{ textDecoration: "none", color: "white" }}
          >
            +234-903-941-5354
          </a>
        </span>
      </div>
      <div className="icon">
        <span>
          <Icon
            style={{ fontSize: "24px", color: "white" }}
            icon="codicon:mail"
          />
        </span>
        <span>
          <a
            href="mailto: agbajeabiodunkay@gmail.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            agbajeabiodunkay@gmail.com
          </a>
        </span>
      </div>
    </>
  );
};

export default UkOffice;
