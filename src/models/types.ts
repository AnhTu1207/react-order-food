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
  price: number;
  imgUrlFood: string;
  avatarRestaurant: string;
}
