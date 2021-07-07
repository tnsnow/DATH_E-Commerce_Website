import axios from "axios";

export const createReview = ({ id, token, body }) => {
  //id product
  return axios.post(
    `${process.env.REACT_APP_URL}/products/comment/${id}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
