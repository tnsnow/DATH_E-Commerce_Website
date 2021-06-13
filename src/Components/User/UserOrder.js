import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import { fetchOrdersUser } from "./functions";
import { useNotification } from "../../hooks";
import { useCookies } from "react-cookie";
import Order from "../Orders/Order";
import { Spin } from "antd";

function UserOrder({ ...props }) {
  const notificate = useNotification();
  const [dataOrders , setDataOrders] = useState([])
  const [cookies] = useCookies(["accessToken"]);
  const {  isLoading , isFetching } = useQuery(
    "fetchOrderUser",
    () => fetchOrdersUser({ token: cookies.accessToken }),
    {
      onSuccess : (data) => {
        console.log("DATa" ,data)
        if(data.status == 200){
          const arrResult = []
          data.data?.forEach(el => {
            arrResult.push(...el.products)
          })
          console.log({arrResult})
          setDataOrders(arrResult)
        }
      },
      onError: (error) => {
        const err = { ...error };
        notificate("error", err.response.data.error);
      },
    }
  );
  
  // if (isLoading || isFetching) return <h1>Loading ...</h1>;
  return <div>
    <Spin spinning={isLoading } >
      <Order data={dataOrders} />
    </Spin>
  </div>;
}

UserOrder.propTypes = {};

export default UserOrder;
