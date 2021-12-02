import { IRoute } from "models/types";
import { Home, Profile, Order, ProductDetail, ChangePassword } from "page";

export const MainRoute: IRoute[] = [
  {
    exact: true,
    path: "/change-pass",
    Component: ChangePassword,
  },
  {
    exact: true,
    path: "/profile",
    Component: Profile,
  },
  {
    Component: ProductDetail,
    exact: true,
    path: "/productdetail",
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
