import { environment as env } from "@app/environments/environments";

export const apiEndpoint = {
  PRODUCTS: {
    LIST: `${env.apiUrl}/products`,
    CREATE: `${env.apiUrl}/products`,
    DETAIL: (id: string | number) => `${env.apiUrl}/products/${id}`,
    UPDATE: (id: string | number) => `${env.apiUrl}/products/${id}`,
    DELETE: (id: string | number) => `${env.apiUrl}/products/${id}`,
  },
  CARTS: {
    LIST: `${env.apiUrl}/carts`,
    CREATE: `${env.apiUrl}/carts`,
    DETAIL: (id: string | number) => `${env.apiUrl}/carts/${id}`,
    UPDATE: (id: string | number) => `${env.apiUrl}/carts/${id}`,
    DELETE: (id: string | number) => `${env.apiUrl}/carts/${id}`,
  },
  USERS: {
    LIST: `${env.apiUrl}/users`,
    CREATE: `${env.apiUrl}/users`,
    DETAIL: (id: string | number) => `${env.apiUrl}/users/${id}`,
    UPDATE: (id: string | number) => `${env.apiUrl}/users/${id}`,
    DELETE: (id: string | number) => `${env.apiUrl}/users/${id}`,
  },
  AUTH: {
    LOGIN: `${env.apiUrl}/auth/login`,
  },
};

export const constants = {
  AUTH_DATA_KEY: "FAKESTORE_AUTH_DATA",
};
