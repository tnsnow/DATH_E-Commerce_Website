import axios from "axios";
export const editProduct = async ({ id, content, token }) => {
  return await axios.post(
    `${process.env.REACT_APP_URL}/products/modify/${id}`,
    content,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
