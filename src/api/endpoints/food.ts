export const getFoodsUrl: string = "/api/food";
export const getFoodsByStoreUrl: (storeId: string) => string = (storeId) => `/api/food/showByStore/${storeId}`;
export const getFoodByCategoryUrl: (cateId: string) => string = (cateId) => `/api/food/showByCategory/${cateId}`;