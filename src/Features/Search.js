import React, { useEffect } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { Divider, Skeleton } from "antd";
import ListItem from "../Components/Card/ListItem";

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
      <Divider orientation="left">Result with keywords "{keyword}"</Divider>
      {/* Styling data below */}
      <ListItem listData={data} isLoading={isLoading} />
    </div>
  );
}
