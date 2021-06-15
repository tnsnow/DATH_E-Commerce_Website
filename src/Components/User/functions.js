import axios from "axios";

export const fetchUser = async ({ token }) => {
  return axios
    .get(`http://localhost:4001/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => err.response.data);
};

export const mutateUpdateUser = async ({ data, token }) => {
  return axios
    .put(`http://localhost:4001/users/me`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => err.response.data);
};

export const fetchOrdersUser = async ({ token }) => {
  return axios
    .get(`http://localhost:4001/orders/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => err.response.data);
};
