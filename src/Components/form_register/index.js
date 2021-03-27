import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import RegisterImage from '../../assets/images/form_customer/login_img.jpg';

index.propTypes = {

};

const changeLogin = () => {
    var addClass = document.getElementById("loginForm");
    addClass.classList.add("active");

    var deleteClass = document.getElementById("registerForm");
    deleteClass.classList.remove("active");
}

function index(props) {
    return (
        <div id="registerForm" className="form-page__item form-page__register">
            <div className="block-item">
                <div className="block-item__form">
                    <div className="title">
                        <h1>Register</h1>
                    </div>
                    <Form className="form">
                        <Form.Item className="form__input">
                            <Input placeholder="Full Name" />
                        </Form.Item>
                        <Form.Item className="form__input">
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item className="form__input">
                            <Input type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item className="form__input">
                            <Input type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item className="form__btn">
                            <Button>Register</Button>
                        </Form.Item>
                        <Form.Item className="form__btn form__change">
                            <Button onClick={() => changeLogin()}>Login</Button>
                        </Form.Item>
                    </Form>
                </div>

                <div className="block-item__img">
                    <img className="img-fluid" src={RegisterImage} />
                </div>
            </div>
        </div>
    );
}

export default index;