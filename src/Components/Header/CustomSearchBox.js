import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import { connectSearchBox } from "react-instantsearch-dom";

const SearchBox = ({ translations, refine }) => {
  return (
    <>
      <Input.Search
        placeholder={translations.placeholder}
        allowClear
        enterButton="Search"
        size="large"
        onChange={(event) => refine(event.currentTarget?.value)}
        // onSearch={onSearch}
      />
    </>
  );
};

SearchBox.propTypes = {};
const CustomSearchBox = connectSearchBox(SearchBox);
export default CustomSearchBox;
