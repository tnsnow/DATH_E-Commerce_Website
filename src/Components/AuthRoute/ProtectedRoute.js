import { useCookies } from "react-cookie";
import { Redirect, Route } from "react-router-dom";
import { useJwt } from "react-jwt";

export default function ProtectedRoute({ child, ...rest }) {
  const [cookies] = useCookies(["accessToken"]);
  const { isExpired } = useJwt(cookies.accessToken);
  // console.log(cookies);
  return (
    <Route
      {...rest}
      render={() =>
        !isExpired ? (
          child
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}
