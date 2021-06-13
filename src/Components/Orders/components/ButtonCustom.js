import React from 'react'
import PropTypes from 'prop-types'
import { Space , Button } from 'antd'

function ButtonCustom({text,...props}) {
    return (
        
        <Space>
            <Button
            {...props}
            >{text}
            </Button>
        </Space>
    )
}

ButtonCustom.propTypes = {
    text : PropTypes.string
}

export default ButtonCustom

