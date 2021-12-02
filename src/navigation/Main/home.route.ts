import { IRoute } from "models/types";
import { Home, Profile, Order, ProductDetail } from "page";

export const MainRoute: IRoute[] = [
  {
    exact: true,
    path: "/profile",
    Component: Profile,
  },
  {
    Component: ProductDetail,
    exact: true,
    path: "/productdetail",
    hasLogin: true,
  },
  {
    exact: true,
    path: "/order",
    Component: Order,
  },
  {
    exact: true,
    path: "/",
    Component: Home,
  },
];
