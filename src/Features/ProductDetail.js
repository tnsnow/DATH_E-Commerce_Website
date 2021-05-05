import React from 'react';
import PropTypes from 'prop-types';

import LinkProduct from '../Components/Link/LinkProduct';
import Detail from "../Components/Detail/Product";

ProductDetail.propTypes = {};

function ProductDetail(props) {
    return (
        <div className="container">
            <LinkProduct />
            <Detail />
        </div>
    );
}

export default ProductDetail;