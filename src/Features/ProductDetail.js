import React, { useState, useEffect } from "react";
import axios from "axios";

import LinkProduct from "../Components/Link/LinkProduct";
import Detail from "../Components/Detail/Product";
import { useParams } from "react-router";
import { useMutation } from "react-query";
import { Skeleton } from "antd";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const fetchSingleProduct = async ({ id }) => {
    return await axios
      .get(`http://localhost:4001/products/single/${id}`)
      .catch((err) => console.log(err));
  };
  const { isLoading, isError, error, mutate, data } = useMutation(
    fetchSingleProduct,
    {
      onSuccess: (data) => {
        try {
          if (data && data.status == 200) {
            //   Log the data
            console.log(data.data[0]);
            setProduct(data.data[0]);
          }
        } catch (error) { }
      },
    }
  );
  useEffect(() => {
    mutate({ id });
  }, [id]);
  if (isLoading)
    return (
      <div className="container">
        <Skeleton
          className="custom-ant-skeleton"
          active
          paragraph={{ rows: 10 }}
        />
      </div>
    );
  if (isError) return <h1>{error}</h1>;

  return (
    <div className="container">
      <LinkProduct />

      <div className="section-product-detail__name">
        {<h1>{product.name}</h1>}
      </div>


      <Detail data={product} />
    </div>
  );
}

export default ProductDetail;
