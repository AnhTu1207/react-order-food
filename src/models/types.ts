import React from "react";

export interface IRoute {
  path: string;
  exact: boolean;
  hasLogin?: boolean;
  requireAuth?: boolean;
  Component: React.ComponentType<any>;
}

export interface IFoodOption {
  id: number;
  label: string;
  type: string;
  list: IList[];
}
export interface IList {
  id: number;
  name: string;
  price: number;
}

export interface IProduct {
  id: number;
  name: string;
  avatar: string;
  price: number;
  detail: string;
  store: {
    id: number;
    name: string;
    avatar: string;
  };
  options: IFoodOption[];
}

export interface ICartItem {
  storeId: number;
  storeName: string;
  storeAvatar: string;
  products: {
    id: number;
    name: string;
    avatar: string;
    price: number;
    detail: string;
    quantity: number;
    cartOptions: IList[];
  }[];
}

export type User = {
  id: string;
  username: string;
  email: string;
  avatar: null | string;
  fb_id: null | string;
  createdAt: string;
  updatedAt: string;
  accessToken: string;
};
