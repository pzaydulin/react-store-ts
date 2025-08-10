import axios from "axios";
import { apiEndpoint } from "@app/core/constants/apiEndpoints";
import { IProduct } from "@app/core/models/product";
import { ProductResponseDTO } from "@app/data-access/product/typesProduct";
import { apiClient } from "@app/data-access/apiClient";

// Можно добавить interceptors для токенов
// axios.defaults.headers.common["Content-Type"] = "application/json";
// --> headers added in apiClient.ts
// --> interceptors added in apiClient.ts

export const apiProduct = {
  async getAll(): Promise<ProductResponseDTO[]> {
    const res = await apiClient.get(apiEndpoint.PRODUCTS.LIST);
    return res.data;
  },

  async create(data: IProduct): Promise<ProductResponseDTO> {
    const res = await apiClient.post(apiEndpoint.PRODUCTS.CREATE, data);
    return res.data;
  },

  async getById(id: string | number): Promise<ProductResponseDTO> {
    const res = await apiClient.get(apiEndpoint.PRODUCTS.DETAIL(id));
    return res.data;
  },

  async update(
    id: string | number,
    data: IProduct
  ): Promise<ProductResponseDTO> {
    const res = await apiClient.put(apiEndpoint.PRODUCTS.UPDATE(id), data);
    return res.data;
  },

  async remove(id: string | number): Promise<void> {
    const res = await apiClient.delete(apiEndpoint.PRODUCTS.DELETE(id));
    return res.data;
  },
};
