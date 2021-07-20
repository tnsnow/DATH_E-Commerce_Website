import { useCookies } from "react-cookie";
import { Redirect, Route } from "react-router-dom";
import { useJwt, decodeToken } from "react-jwt";
import { useSetRecoilState } from "recoil";
import { currentUser } from "../../recoil/user/atom";
import { useEffect } from "react";
import { useMutation } from "react-query";
import { fetchUser } from "../User/functions";

export default function ProtectedRoute({ component, ...rest }) {
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
            console.log(data);
            setCurrentUser(data?.data);
          },
        }
      );
    }
    // cookies.accessToken && setCurrentUser(decodeToken(cookies.accessToken));
  }, []);

  return (
    <Route
      {...rest}
      render={() => {
        console.log({ cookies: cookies.accessToken });
        return cookies.accessToken ? (
          component
        ) : (
          <Redirect
            push
            to={{
              pathname: "/login",
            }}
          />
        );
      }}
    />
  );
}
