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
  const [dataOrders, setDataOrders] = useState([]);
  const [cookies] = useCookies(["accessToken"]);
  const { error, isError, isLoading, isFetching } = useQuery(
    "fetchOrderUser",
    () => fetchOrdersUser({ token: cookies.accessToken }),
    {
      onSuccess: (data) => {
        try {
          // console.log("DATa", data);
          if (data.status == 200) {
            const arrResult = [];
            data.data?.forEach((el) => {
              arrResult.push(...el.products);
            });
            // console.log({ arrResult });
            setDataOrders(arrResult);
          }
        } catch (error) {
          console.log(error);
        }
      },
      onError: (error) => {
        const err = { ...error };
        notificate("error", err.response.data.error);
      },
    }
  );

  if (isError) return <div>Error</div>;
  return (
    <div>
      <Spin spinning={isLoading || isFetching}>
        <Order data={dataOrders} />
      </Spin>
    </div>
  );
}

UserOrder.propTypes = {};

export default UserOrder;
