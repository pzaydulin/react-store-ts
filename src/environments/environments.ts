export const environment = {
  apiUrl: import.meta.env.VITE_API_URL as string,
  mode: import.meta.env.MODE as "development" | "production" | "test",
};
