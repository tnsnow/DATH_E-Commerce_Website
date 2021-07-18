import React from "react";
import PropTypes from "prop-types";
import { AutoComplete, Input } from "antd";
import { connectAutoComplete, connectSearchBox } from "react-instantsearch-dom";
import { useHistory } from "react-router";

const CompleteSearch = ({ hits, refine, children }) => {
  const history = useHistory();
  return (
    <AutoComplete
      dropdownMatchSelectWidth={500}
      style={{ width: 250 }}
      allowClear
      options={hits.map((i) => ({ label: i.name, value: i.name }))}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onSelect={(value, option) => {
        refine(value);
      }}
      onSearch={(value) => history.push("/home/search/foo")}
    >
      {/* {hits} */}
      <Input.Search
        placeholder="Search your product ..."
        enterButton="Search"
      />
    </AutoComplete>
  );
};
export const CustomCompleteSearch = connectAutoComplete(CompleteSearch);
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
        onSearch={(value) => {
          refine(value);
          history.push("/home/search/foo");
        }}
      />
    </>
  );
};

SearchBox.propTypes = {};
const CustomSearchBox = connectSearchBox(SearchBox);
export default CustomSearchBox;
