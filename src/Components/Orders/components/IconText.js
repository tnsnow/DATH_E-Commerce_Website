import React from 'react'
import PropTypes from 'prop-types'
import { Space } from 'antd'

function IconText({icon , text }) {
    return (
        <div>
        <Space >
            {icon}
            {text}
        </Space>
        </div>
    )
}

IconText.propTypes = {
    icon : PropTypes.any,
    text : PropTypes.string
}

export default IconText

