import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import { fetchOrdersUser } from "./functions";
import { useNotification } from "../../hooks";
import { useCookies } from "react-cookie";

function UserOrder({ ...props }) {
  const notificate = useNotification();
  const [cookies] = useCookies(["accessToken"]);
  const { data, isLoading } = useQuery(
    "fetchOrderUser",
    () => fetchOrdersUser({ token: cookies.accessToken }),
    {
      onError: (error) => {
        const err = { ...error };
        notificate("error", err.response.data.error);
      },
    }
  );
  if (data) {
    console.log({ dataOrder: data });
  }
  if (isLoading) return <h1>Loading ...</h1>;
  return <div>Order Tab</div>;
}

UserOrder.propTypes = {};

export default UserOrder;
