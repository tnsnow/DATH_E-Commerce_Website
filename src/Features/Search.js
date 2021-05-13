import React, { useEffect } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { Skeleton } from "antd";

export default function Search() {
  const { keyword } = useParams();
  const fetchSearchProduct = ({ keyword, limit, page }) => {
    return axios
      .get(
        `http://localhost:4001/products/search?search=${keyword}&limit=${limit}&page=${page}`
      )
      .catch((err) => console.log(err));
  };
  const { isLoading, data, isSuccess, isError, mutate, error } = useMutation(
    fetchSearchProduct,
    {
      onSuccess: (data) => {},
    }
  );
  useEffect(() => {
    mutate({ keyword, limit: 100, page: 1 });
  }, [keyword]);
  if (isLoading)
    return (
      <div className="container">
        <Skeleton
          className="custom-ant-skeleton"
          active
          paragraph={{ rows: 5 }}
        />
        ;
      </div>
    );
  if (isError) return <h1>{error}</h1>;
  return (
    <div className="container">
      <h1>Your search term : {keyword}</h1>
      {/* Styling data below */}
      {data && data.status == 200
        ? data.data.map((product, i) => (
            <div>
              <h2>{product.name}</h2>
            </div>
          ))
        : null}
    </div>
  );
}
