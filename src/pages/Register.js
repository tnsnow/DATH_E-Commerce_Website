import React from "react";
import FormRegister from "../Components/FormRegister/FormRegister";
import '../assets/scss/styles.scss';
import { Layout } from './Login'
export default function Register() {
  console.log('Loading register page!');
  return (
    <Layout title="Register">
<FormRegister width="100%"/>

    </Layout>
  );
}