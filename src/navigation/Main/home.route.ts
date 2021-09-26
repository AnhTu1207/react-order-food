import { IRoute } from "models/types";
import { Home } from "page";

export const MainRoute: IRoute[] = [
  {
    exact: true,
    path: "/",
    Component: Home,
  },
];
