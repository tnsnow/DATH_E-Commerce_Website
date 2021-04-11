import React, { useState } from "react";
import Navbar from "../Components/Header/Navbar";
import CoverBanner from "../Components/Header/CoverBanner";


//Page = Multiple Components
const { SubMenu } = Menu;
const { Search } = Input;

export default function Home() {
  const [current, setCurrent] = useState();

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const onSearch = (value) => console.log(value);

  return (
    <>
      <Navbar />
      <CoverBanner />
    </>
  );
}
