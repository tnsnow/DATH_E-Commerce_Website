import React from 'react'
import PropTypes from 'prop-types'
import { Divider, List } from 'antd'
import CustomListItem from './CustomListItem'

function Order({data}) {
    // console.log("data in order", data)
    return (
        <>
        <Divider orientation="left">Your oders</Divider>
            <List itemLayout={"vertical"} dataSource={data}
                renderItem={item => <CustomListItem data={item}/>}
            ></List>
        </>
    )
}

Order.propTypes = {
    data : PropTypes.object
}

export default Order

