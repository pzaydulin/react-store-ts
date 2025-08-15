import { createContext, PropsWithChildren, useContext, useState } from "react";
import { IUser } from "@app/core/models/user";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import {
  apiClient,
  clearTokens,
  getAccessToken,
  saveTokens,
} from "@app/data-access/apiClient";
import { apiAuth } from "@app/data-access/auth/apiAuth";
import { jwtDecode } from "jwt-decode";
import { ILoginCredentials } from "@app/data-access/auth/typesAuth";
import axios from "axios";
import { apiProduct } from "@app/data-access/product/apiProduct";

interface JwtPayload {
  sub: string; // id пользователя
  // можно добавить поля, если есть в payload
}

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  user: IUser | null;
  categories: string[] | [];
  isLoading: boolean;
  login: (credentials: ILoginCredentials) => Promise<void>;
  logout: () => void;
  refetchProfile: () => void;
  errorMsg?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState(getAccessToken());
  const [userId, setUserId] = useState<number | null>(
    token ? Number(jwtDecode<JwtPayload>(token).sub) : null
  );
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

  const isAuthenticated = !!token;

  const queryClient = useQueryClient();

  // request categories
  const categories = useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: () => apiProduct.getCategories(),
  });

  // Запрос профиля через React Query
  const {
    data: user,
    isLoading,
    refetch: refetchProfile,
  } = useQuery<IUser>({
    queryKey: ["auth", "profile", userId],
    queryFn: () => {
      if (!userId) {
        return Promise.reject("User ID is required");
      }
      return apiAuth.getProfile(userId);
    },
    enabled: !!userId, // грузим только если авторизованы
  });

  const loginMutation = useMutation({
    mutationFn: apiAuth.login,
    onSuccess: (data) => {
      const newToken = data.token;
      setToken(newToken);

      saveTokens(newToken); // установка токена в клиент

      const decoded = jwtDecode<JwtPayload>(newToken);
      setUserId(Number(decoded.sub));

      refetchProfile(); // грузим профиль сразу
    },
    onError: (error: any) => {
      if (axios.isAxiosError(error) && error.response) {
        console.log("Error:", error);
        setErrorMsg(error.response.data.message || "Invalid credentials");
      } else {
        setErrorMsg("An unexpected error occurred");
      }
    },
  });

  const login = async (credentials: ILoginCredentials) => {
    setErrorMsg(undefined);
    await loginMutation.mutateAsync(credentials);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    clearTokens(); // очистка токенов в клиенте
    queryClient.removeQueries({ queryKey: ["auth", "profile"] });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token,
        user: user ?? null,
        categories: categories.data ?? [],
        isLoading: isLoading || loginMutation.isPending || categories.isLoading,
        login,
        logout,
        refetchProfile,
        errorMsg,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
