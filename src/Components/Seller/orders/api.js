import axios from "axios";

export const fetchOrderData = ({ id, token }) => {
  try {
    return axios.get(
      `${process.env.REACT_APP_URL}/products/item-seller/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
export const mutateStatus = ({ id, status, token }) => {
  try {
    return axios.post(
      `${process.env.REACT_APP_URL}/products/status/${id}`,
      {
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
