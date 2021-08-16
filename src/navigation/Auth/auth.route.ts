import { IRoute } from "models/types";
import { Login } from "page";

export const AuthRoute: IRoute[] = [
  {
    Component: Login,
    exact: true,
    path: "/login",
    hasLogin: true,
  },
];
