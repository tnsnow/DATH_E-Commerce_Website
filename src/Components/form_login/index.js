import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import LoginImage from '../../assets/images/form_customer/login_img.jpg';

index.propTypes = {

};

const changeResgister = () => {
    var addClass = document.getElementById("registerForm");
    addClass.classList.add("active");

    var deleteClass = document.getElementById("loginForm");
    deleteClass.classList.remove("active");
}

function index(props) {

    return (
        <div id="loginForm" className="form-page__item form-page__login active">
            <div className="block-item">
                <div className="block-item__img">
                    <img className="img-fluid" src={LoginImage} />
                </div>

                <div className="block-item__form">
                    <div className="title">
                        <h1>Login</h1>
                    </div>
                    <Form className="form">
                        <Form.Item className="form__input">
                            <Input placeholder="User Name" />
                        </Form.Item>
                        <Form.Item className="form__input">
                            <Input type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item className="form__notion">
                            <a href="#">Forgot your password?</a>
                        </Form.Item>
                        <Form.Item className="form__btn">
                            <Button>Login</Button>
                        </Form.Item>
                        <Form.Item className="form__btn form__change">
                            <Button onClick={() => changeResgister()}>Register</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default index;