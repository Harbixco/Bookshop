import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import "./WelcomePage.css";
import {
  Input,
  Stack,
  InputLeftAddon,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import {
  GlobalOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import { Checkbox } from "@chakra-ui/react";
import { Icon } from '@iconify/react';


const WelcomePage = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6 offset-md-3">
          <Link to="/Proceed">
            <ArrowBackIcon w={6} h={9} />
          </Link>
          <div className="welcome">Welcome</div>
          <div className="sign">Sign in to proceed</div>
          <div>
            <div className="first-card">
              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftAddon children={<GlobalOutlined />} />
                  <Input type="email" placeholder="Email or ID" />
                </InputGroup>
              </Stack>
            </div>
            <div>
              <InputGroup size="md">
                <InputLeftAddon children={<LockOutlined />} />
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="0rem" size="lg" onClick={handleClick}>
                    {show ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>
          </div>
          <div className="keep-me">
            <Checkbox defaultIsChecked> Keep me signed in</Checkbox>
          </div>
          <div className="from-sign">
            <Button
              ml="30px"
              size="md"
              height="43px"
              width="180px"
              border-borderRadius="5px"
              colorScheme="blue"
              mt="20px"
            >
              Sign in
            </Button>
            <div className="forgot-password">Forgot Password?</div>
            <div>
              <label>Don't have an account?</label>
              
            </div>
            <div>
              <Button bg='white'><Icon icon="flat-color-icons:google" style={{ color: "blue", fontSize: '20px' }} /></Button>
              <Button bg='white'><Icon icon="akar-icons:facebook-fill" style={{ color: "blue", fontSize: '20px' }} /></Button>
              <Button bg='white'><Icon icon="logos:pinterest" style={{ color: "blue", fontSize: '20px' }} /></Button>
              <Button bg='white'><Icon icon="logos:twitter" style={{ color: "blue", fontSize: '20px' }} /></Button>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;