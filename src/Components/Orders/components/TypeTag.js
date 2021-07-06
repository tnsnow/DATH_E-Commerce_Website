import { Tag } from "antd"
import {
    ClockCircleOutlined,
    DollarOutlined, 
    WarningOutlined,
    TagsOutlined 
} from '@ant-design/icons'
export const TypeTag = ({type ,...props}) =>  {
//  ["prepare", "shipping", "checkout", "cancel"], 
    switch(type) {
    case 'prepare':
      return <Tag className="centered" {...props} icon={<ClockCircleOutlined />} color="warning">
        Prepare
      </Tag> 
    case 'shipping':
      return <Tag {...props} icon={<TagsOutlined />} color={"processing"} >Shipping</Tag>
    case 'checkout':
      return <Tag {...props} icon={<DollarOutlined /> } color={"success"} >Checkout</Tag>
    case 'cancel':
      return <Tag {...props} icon={<WarningOutlined />} color={"error"}>Cancel</Tag>
    default:
      return <Tag {...props}>Unknow</Tag>
  
  }
}
