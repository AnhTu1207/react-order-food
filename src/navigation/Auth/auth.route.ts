import { IRoute } from "models/types";
import { Login } from "page";
import {ProductDetail} from "page"


export const AuthRoute: IRoute[] = [
  {
    Component: Login,
    exact: true,
    path: "/login",
    hasLogin: true,
  },
	{
		Component: ProductDetail,
		exact: true,
		path: "/productdetail",
		hasLogin: true,	
	}
	
];
