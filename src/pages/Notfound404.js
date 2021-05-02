import React from "react";
import { useLocation } from "react-router";

export default function Notfound404() {
  const { pathname } = useLocation();
  return (
    <div className="middle-text">
      <h1>Path : {pathname} not found 😥</h1>
    </div>
  );
}
