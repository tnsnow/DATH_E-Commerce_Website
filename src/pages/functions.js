import axios from "axios";

export const postCreateOrder = ({ token, data }) => {
  return axios
    .post(`${process.env.REACT_APP_URL}/orders/create`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => err.response.data);
};
