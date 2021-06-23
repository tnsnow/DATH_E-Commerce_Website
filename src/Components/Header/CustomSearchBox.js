import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { connectSearchBox } from "react-instantsearch-dom";
import { useHistory } from "react-router";

const SearchBox = ({ translations, refine }) => {
  const history = useHistory();
  return (
    <>
      <Input.Search
        placeholder={translations.placeholder}
        allowClear
        enterButton="Search"
        size="large"
        onChange={(event) => refine(event.currentTarget?.value)}
        onSearch={() => {
          history.push("/home/search/foo");
        }}
      />
    </>
  );
};

SearchBox.propTypes = {};
const CustomSearchBox = connectSearchBox(SearchBox);
export default CustomSearchBox;
