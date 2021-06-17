import React, { useEffect } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { Col, Divider, Row, Skeleton } from "antd";
import FilterCard from "../Components/Filter/FilterCard";
import FullWidthBanner from "../Components/Header/FullWidthBanner";
import Title from "antd/lib/typography/Title";
// import {  } from "react-instantsearch-dom/dist/cjs/widgets/Hits";
import CustomHitCart from "../Components/Card/CustomHitCard";
import { Hits, Stats } from "react-instantsearch-dom";
import TitleWithFilter from "../Components/Filter/TitleWithFilter";
import CustomPagination from "./CustomPagination";

export default function Search(props) {
  const { keyword } = useParams();
  const fetchSearchProduct = ({ keyword, limit, page }) => {
    return axios
      .get(
        `${process.env.REACT_APP_URL}/products/search?search=${keyword}&limit=${limit}&page=${page}`
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
            <Title level={3}>
              Search all products <br />{" "}
              {
                <p style={{ fontSize: 16, fontWeight: "lighter" }}>
                  <Stats
                    translations={{
                      stats(
                        nbHits,
                        processingTimeMS,
                        nbSortedHits,
                        areHitsSorted
                      ) {
                        return nbHits && processingTimeMS
                          ? `${nbHits.toLocaleString()} results found in ${processingTimeMS.toLocaleString()}ms`
                          : "";
                      },
                    }}
                  />
                </p>
              }
            </Title>
          </>
        }
      />
      <Row>
        <Col style={{ padding: 10 }} span={6}>
          <FilterCard />
        </Col>
        <Col span={18}>
          {/* Styling data below */}
          <div className="section-all-products__content">
            <Row gutter={24}>
              <TitleWithFilter level={4} text={"All products"} />
              <Hits hitComponent={CustomHitCart} />
            </Row>
          </div>
          <CustomPagination
            showFirst={false}
            showLast={false}
            defaultRefinement={1}
          />
        </Col>
      </Row>
    </div>
  );
}
