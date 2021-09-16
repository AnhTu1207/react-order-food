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
  name: string;
  avatar: string;
  price: number;
  detail: string;
  store: {
    name: string;
    avatar: string;
  };
}
