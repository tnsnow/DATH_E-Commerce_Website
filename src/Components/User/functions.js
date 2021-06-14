import axios from "axios";

export const fetchUser = async ({ token }) => {
  return axios
    .get(`${process.env.REACT_APP_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => err.response.data);
};

export const mutateUpdateUser = async ({ data, token }) => {
  return axios
    .put(`${process.env.REACT_APP_URL}/users/me`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => err.response.data);
};

export const fetchOrdersUser = async ({ token }) => {
  return axios
    .get(`${process.env.REACT_APP_URL}/orders/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => err.response.data);
};
