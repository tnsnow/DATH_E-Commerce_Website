import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb , Typography } from 'antd';

LinkProduct.propTypes = {
    path : PropTypes.array
};
const { Text } = Typography
function LinkProduct({path}) {

    return (
        <Breadcrumb className="section-product-detail__linkURL">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            {
                path?.map(i => <Breadcrumb.Item>
               <Text type="secondary" >
                    {i.name}
                   </Text>
            </Breadcrumb.Item>)
            }
        </Breadcrumb>
    );
}

export default LinkProduct;