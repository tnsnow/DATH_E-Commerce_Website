import { useCookies } from "react-cookie";
import { Redirect, Route } from "react-router-dom";
import { useJwt, decodeToken } from "react-jwt";
import { useRecoilState } from "recoil";
import userAtom from "../../recoil/user";
import { useEffect } from "react";

export default function ProtectedRoute({ child, ...rest }) {
  const [cookies] = useCookies(["accessToken"]);
  const { isExpired } = useJwt(cookies.accessToken);
  const [_, setCurrentUser] = useRecoilState(userAtom);

  useEffect(() => {
    cookies.accessToken && setCurrentUser(decodeToken(cookies.accessToken));
  }, [cookies]);

  return (
    <Route
      {...rest}
      render={() =>
        !isExpired ? (
          child
        ) : (
          <Redirect
            push
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}
