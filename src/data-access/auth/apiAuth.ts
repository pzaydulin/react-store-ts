import { apiEndpoint } from "@app/core/constants/apiEndpoints";
import { apiClient, saveTokens, clearTokens } from "@app/data-access/apiClient";
import { ILoginCredentials } from "@app/data-access/auth/typesAuth";

export const apiAuth = {
  async login(credentials: ILoginCredentials) {
    const res = await apiClient.post(apiEndpoint.AUTH.LOGIN, credentials);
    saveTokens(res.data.token);
    return res.data;
  },
  async logout() {
    clearTokens();
  },
  async getProfile(id: string) {
    const res = await apiClient.get(apiEndpoint.USERS.DETAIL(id));
    return res.data;
  },
};
