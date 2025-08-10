import { constants } from "@app/core/constants/apiEndpoints";
import { environment } from "@app/environments/environments";
import axios from "axios";

// Getting access and refresh tokens from localStorage
function getAccessToken() {
  return localStorage.getItem(constants.AUTH_DATA_KEY + "_access");
}

function getRefreshToken() {
  return localStorage.getItem(constants.AUTH_DATA_KEY + "_refresh");
}

function saveTokens(access: string, refresh?: string) {
  localStorage.setItem(constants.AUTH_DATA_KEY + "_access", access);
  if (refresh) {
    localStorage.setItem(constants.AUTH_DATA_KEY + "_refresh", refresh);
  }
}

function clearTokens() {
  localStorage.removeItem(constants.AUTH_DATA_KEY + "_access");
  localStorage.removeItem(constants.AUTH_DATA_KEY + "_refresh");
}

// Create an axios instance for API requests
const apiClient = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor — adding Authorization header
// This will add the access token to every request if it exists
apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor — handling token refresh
// This will check for 401 responses and attempt to refresh the token
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error is 401 and the request is not a retry, try to refresh the token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = getRefreshToken();
        if (!refresh) {
          clearTokens();
          window.location.href = "/login";
          return Promise.reject(error);
        }

        const res = await axios.post(
          `${environment.apiUrl}/auth/refresh-token`,
          { refreshToken: refresh }
        );

        const newAccess = res.data.accessToken;
        saveTokens(newAccess, res.data.refreshToken);

        // Retry the original request with the new access token
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return apiClient(originalRequest);
      } catch (err) {
        clearTokens();
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export { apiClient, saveTokens, clearTokens, getAccessToken };
