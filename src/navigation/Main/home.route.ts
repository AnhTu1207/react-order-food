import { IRoute } from "models/types";
import { Home, Profile, Order, ProductDetail, Category } from "page";

export const MainRoute: IRoute[] = [
  {
    exact: true,
    path: "/profile",
    Component: Profile,
  },
  {
    Component: ProductDetail,
    exact: true,
    path: "/store/:storeId",
    hasLogin: true,
  },
  {
    exact: true,
    path: "/order",
    Component: Order,
  },
  {
    exact: true,
    path: '/category/:categoryId',
    Component: Category,
  },
  {
    exact: true,
    path: "/",
    Component: Home,
  },
];
