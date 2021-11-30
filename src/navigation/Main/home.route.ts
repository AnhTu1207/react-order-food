import { IRoute } from "models/types";
import { Home } from "page";
import Order from "page/Order";

export const MainRoute: IRoute[] = [
  {
    exact: true,
    path: "/",
    Component: Home,
  },
  {
    exact: true,
    path: "/order/:id",
    Component: Order,
  },
];
