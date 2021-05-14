import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import { useQuery } from 'react-query';
import axios from 'axios';

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