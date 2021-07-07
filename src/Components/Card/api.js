import axios from "axios";

export const fetchComment = ({ id, token }) => {
  // id product
  return axios.get(`${process.env.REACT_APP_URL}/products/comment/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
