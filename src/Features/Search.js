import React, { useEffect } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { Col, Divider, Row, Skeleton } from "antd";
import ListItem from "../Components/Card/ListItem";
import FilterCard from "../Components/Filter/FilterCard";
import FullWidthBanner from "../Components/Header/FullWidthBanner";
import Title from "antd/lib/typography/Title";

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
      </div>
    );
  if (isError) return <h1>{error}</h1>;
  return (
    <div className="container">
      <FullWidthBanner
        content={
          <>
            <Title level={3}>Search all products</Title>
          </>
        }
      />
      <Row>
        <Col style={{ padding: 10 }} span={6}>
          <FilterCard />
        </Col>
        <Col span={18}>
          <Divider orientation="left">Result with keywords "{keyword}"</Divider>
          {/* Styling data below */}
          <ListItem listData={data} isLoading={isLoading} />
        </Col>
      </Row>
    </div>
  );
}
