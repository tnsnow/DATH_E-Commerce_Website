import axios from "axios";

export const postCreateOrder = ({ token, data }) => {
  return axios
    .post(`http://localhost:4001/orders/create`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => err.response.data);
};
