import React from "react";
import { Image, Box, Button } from "@chakra-ui/react";
import logo from "./images/logo.png";
import "./Index.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-sm-1 col-md-6 offset-md-4 column">
          <Box boxSize="sm">
            <Image src={logo} style={{marginLeft: '80px'}} />
            <div className="text">
                 <div className="real">Real Time Experience</div>
            <div className="have">Have a wonderful real-time</div>
            <div className="experience">experience listening to</div>
            <div className="music">music</div>
            </div>
            <Link to="/Proceed" className="Started">
                 <Button
                 ml='30px'
              size="md"
              height="48px"
              width="400px"
              border="2px"
              colorScheme="blue"
            >
           Get Started
            </Button>
            </Link>
           
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Index;