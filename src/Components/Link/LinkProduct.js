import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';

LinkProduct.propTypes = {};

function LinkProduct(props) {
    return (
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="#">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="#">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default LinkProduct;