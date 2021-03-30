import React from "react";
import PropTypes from "prop-types";
import FormLogin from "../../../Components/form_login";
import FormRegister from "../../../Components/form_register";
import "../form_customer/style.scss";

LoginForm.propTypes = {};

export default function LoginForm(props) {
  return (
    <div div div className="form-page">
      <FormLogin />
      <FormRegister />
    </div>
  );
}
