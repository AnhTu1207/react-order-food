import { IRoute } from "models/types";
import { Login, Signup } from "page";
import { ProductDetail } from "page";

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
    Component: ProductDetail,
    exact: true,
    path: "/productdetail",
    hasLogin: true,
  },
];
