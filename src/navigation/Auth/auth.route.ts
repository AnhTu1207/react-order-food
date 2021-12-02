import { IRoute } from "models/types";
import { Login, Signup, Verify } from "page";

export const AuthRoute: IRoute[] = [
  {
    Component: Login,
    exact: true,
    path: "/login",
    hasLogin: true,
  },
  {
    Component: Signup,
    exact: true,
    path: "/signup",
  },
  {
    Component: Verify,
    exact: true,
    path: "/verify",
  },
];
