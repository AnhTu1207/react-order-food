import { IRoute } from "models/types";
import {
  Home,
  Profile,
  Order,
  ProductDetail,
  ChangePassword,
  EditProfile,
  Category,
  History,
} from "page";

export const MainRoute: IRoute[] = [
  {
    exact: true,
    path: "/history",
    Component: History,
  },
  {
    exact: true,
    path: "/edit-profile",
    Component: EditProfile,
  },
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
    path: "/store/:storeId",
  },
  {
    exact: true,
    path: "/order",
    Component: Order,
  },
  {
    exact: true,
    path: "/category/:categoryId",
    Component: Category,
  },
  {
    exact: true,
    path: "/",
    Component: Home,
  },
];
