import React from "react";
import { Row, Col, Typography, Space } from "antd";
import FormLogin from "../Components/FormLogin/FormLogin";
export const Layout = ({title , children}) => {
  return (
     <>
    <Row style={{height : "100%"}}>
      <Col span={12} style={{height : "100%"}}>
    <div className="full-image-section"></div>
      </Col>
      <Col span={12}>
      <div className="centered h-100 ">
       <Space className="form-main" direction="vertical" size= "large">
        <Typography.Title>
          {title}
        </Typography.Title>
        {children}
         </Space> 
          

      </div>

      </Col>
      </Row> 
    </>
  )
}
export default function Login() {
  return (
   <Layout title="Login">
     <FormLogin /> 
   </Layout>
  );
}
