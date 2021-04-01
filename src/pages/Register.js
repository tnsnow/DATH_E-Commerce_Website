import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import FormRegister from "../Components/form_register/index";

Register.propTypes = {};
export default function Register() {
  return (
    <div>
      <Row>
        <Col span={12}>Background here</Col>
        <Col span={12}>
          <div
            className="container mt-5 center-custom"
            style={{ textAlign: "center" }}
          >
            <h1>Register</h1>
            <FormRegister width="100%" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
