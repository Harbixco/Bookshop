import React from "react";
import "./Proceed.css";
import { Image, Button } from "@chakra-ui/react";
import dj from "./images/dj.png";
import listen from "./images/listen.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";

const Proceed = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 offset-sm-3 col-md-6 offset-md-4 column">
          <div className="choose">Choose your User type</div>
          <div className="select">Select the experience best</div>
          <div className="suitable">suitable to you</div>
        </div>
      </div>
      <div className="row second-row">
        <div className="col-md-6">
            <Card variant="outlined" className="first">
               <CardContent>
                <label className="host">Host</label>
                <Image src={dj} height="250px" ml="90px" />
              </CardContent>
            </Card>
        </div>
        <div className="col-md-6">
            <Card variant="outlined">
              <CardContent>
                <label className="Guest">Guest</label>
                <Image src={listen} height="250px" ml="40px" />
              </CardContent>
            </Card>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 colsm-6 offset-sm-1">
            <Link to="/Welcome" className="Started">
              <Button
                ml="30px"
                size="md"
                height="48px"
                width="400px"
                border="2px"
                colorScheme="blue"
                mt="20px"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proceed;
