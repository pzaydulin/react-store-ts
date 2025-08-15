import { environment as env } from "@app/environments/environments";

export const apiEndpoint = {
  PRODUCTS: {
    LIST: `${env.apiUrl}/products`,
    LIST_LIMIT: (limit: number) => `${env.apiUrl}/products?limit=${limit}`,
    LIST_SORT: (sort: "desc" | "asc") => `${env.apiUrl}/products?sort=${sort}`,
    CREATE: `${env.apiUrl}/products`,
    DETAIL: (id: number) => `${env.apiUrl}/products/${id}`,
    UPDATE: (id: number) => `${env.apiUrl}/products/${id}`,
    DELETE: (id: number) => `${env.apiUrl}/products/${id}`,
    CATEGORIES: `${env.apiUrl}/products/categories`,
    CATEGORY: (category: string) =>
      `${env.apiUrl}/products/category/${category}`,
  },
  CARTS: {
    LIST: `${env.apiUrl}/carts`,
    CREATE: `${env.apiUrl}/carts`,
    DETAIL: (id: number) => `${env.apiUrl}/carts/${id}`,
    UPDATE: (id: number) => `${env.apiUrl}/carts/${id}`,
    DELETE: (id: number) => `${env.apiUrl}/carts/${id}`,
  },
  USERS: {
    LIST: `${env.apiUrl}/users`,
    CREATE: `${env.apiUrl}/users`,
    DETAIL: (id: number) => `${env.apiUrl}/users/${id}`,
    UPDATE: (id: number) => `${env.apiUrl}/users/${id}`,
    DELETE: (id: number) => `${env.apiUrl}/users/${id}`,
  },
  AUTH: {
    LOGIN: `${env.apiUrl}/auth/login`,
  },
};

export const constants = {
  AUTH_DATA_KEY: "FAKESTORE_AUTH_DATA",
};
