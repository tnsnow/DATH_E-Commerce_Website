import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import FormLogin from "../Components/FormLogin/FormLogin";
import '../assets/scss/styles.scss';
// import FormRegister from "../../../Components/form_register";

Login.propTypes = {};
export default function Login() {
  return (
    <div id="loginPage" class="section-form section-login">
      <Row justify="center" align="center">
        <Col span={8} className="d-flex align-items-center h-100vh">
          <div
            className="section-form__content"
            value={100}
          >
            <div className="section-form__content--title">
              <h1>Login</h1>
            </div>

            <FormLogin />
          </div>
        </Col>
      </Row>
    </div>
  );
}
