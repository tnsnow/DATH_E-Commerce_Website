import React from "react";
import { Row, Col } from "antd";
import FormRegister from "../Components/FormRegister/FormRegister";
import '../assets/scss/styles.scss';

Register.propTypes = {};
export default function Register() {
  return (
    <div id="registerPahe" className="section-form section-register">
      <Row justify="center" align="center">
        <Col span={8} className="d-flex align-items-center h-100vh">
          <div
            className="section-form__content"
            value={100}
          >
            <div className="section-form__content--title">
              <h1>Login</h1>
            </div>

            <FormRegister />
          </div>
        </Col>
      </Row>
    </div>
  );
}
