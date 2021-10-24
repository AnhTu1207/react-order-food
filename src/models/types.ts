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
  list: IList[];
}
interface IList {
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
    name: string;
    avatar: string;
  };
  option: IFoodOption[];
}

export interface ICartItem{
  id: number;
  foodName: string;
  restaurantName: string;
  price: number;
  quantity: number;
  imgUrlFood: string;
  avatarRestaurant: string;
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
