import { IRoute } from "models/types";
import { Home, Profile } from "page";

export const MainRoute: IRoute[] = [
  {
    exact: true,
    path: '/profile',
    Component: Profile
  },
  {
    exact: true,
    path: "/",
    Component: Home,
  },
];
