import { useCookies } from "react-cookie";
import { Redirect, Route } from "react-router-dom";
import { useJwt, decodeToken } from "react-jwt";
import { useSetRecoilState } from "recoil";
import { currentUser } from "../../recoil/user/atom";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { fetchUser } from "../User/functions";

export default function ProtectedRoute({ child, ...rest }) {
  const [cookies] = useCookies(["accessToken"]);
  const { isExpired } = useJwt(cookies.accessToken);
  const setCurrentUser = useSetRecoilState(currentUser);
  const { mutate } = useMutation(fetchUser);
  useEffect(() => {
    if (cookies.accessToken) {
      mutate(
        { token: cookies.accessToken },
        {
          onSuccess: (data) => {
            setCurrentUser(data?.data);
          },
        }
      );
    }
    // cookies.accessToken && setCurrentUser(decodeToken(cookies.accessToken));
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
