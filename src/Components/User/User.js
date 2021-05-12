import React from "react";
import { Row } from "antd";
import { Route, Switch } from "react-router";
import UserPassword from "./UserPassword";
import UserProfile from "./UserProfile";
export default function User() {
  return (
    <div className="background-component">
      {/* WE ARE IN THE ROWWWWWW */}
      <Row>
        <Switch>
          <Route exact path="/home/profile">
            <UserProfile />
          </Route>
          <Route path="/home/profile/password">
            <UserPassword />
          </Route>
        </Switch>
      </Row>
    </div>
  );
}
