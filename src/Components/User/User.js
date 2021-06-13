import React from "react";
import { Row } from "antd";
import { Route, Switch } from "react-router";
import UserPassword from "./UserPassword";
import UserProfile from "./UserProfile";
import UserOrder from "./UserOrder";
export default function User() {
  return (
    <div className="background-component">
      {/* WE ARE IN THE ROWWWWWW */}
      <Row>
        <Switch>
          <Route exact path="/home/profile">
            <UserProfile key={'profile'} />
          </Route>
          <Route  path="/home/profile/orders">
            <UserProfile key={'orders'} />
          </Route>
          <Route  path="/home/profile/shop">
            <UserProfile key={'shop'} />
          </Route>
        </Switch>
      </Row>
    </div>
  );
}
