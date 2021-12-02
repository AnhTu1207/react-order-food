import { IRoute } from "models/types";
import { Home, Profile, Order } from "page";

export const MainRoute: IRoute[] = [
  {
    exact: true,
    path: "/profile",
    Component: Profile,
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
