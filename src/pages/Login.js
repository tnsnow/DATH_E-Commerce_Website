import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import FormLogin from "../Components/FormLogin/FormLogin";
// import FormRegister from "../../../Components/form_register";

Login.propTypes = {};
export default function Login() {
  return (
    <div>
      <Row>
        <Col span={12}>Background here</Col>
        <Col span={12}>
          <div
            className="container mt-5 center-custom"
            style={{ textAlign: "center" }}
          >
            <h1>Login</h1>
            <FormLogin width="100%" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
