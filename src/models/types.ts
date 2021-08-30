import React from "react";

export interface IRoute {
  path: string;
  exact: boolean;
  hasLogin?: boolean;
  requireAuth?: boolean;
  Component: React.ComponentType<any>;
}

export interface IProduct {
  id: number;
  nameOfFood: string;
  nameOfRestaurant: string;
  price: string;
  imgUrlFood: string;
  avatarRestaurant: string;
}
