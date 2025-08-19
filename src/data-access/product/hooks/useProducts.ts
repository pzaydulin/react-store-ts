import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiProduct } from "@app/data-access/product/apiProduct";
import { ProductResponseDTO } from "../typesProduct";

export function useProducts() {
  return useQuery<ProductResponseDTO[]>({
    queryKey: ["products"],
    queryFn: apiProduct.getAll,
  });
}

export function useProductsLimited(limit: number) {
  return useQuery<ProductResponseDTO[]>({
    queryKey: ["products", limit],
    queryFn: () => apiProduct.getLimited(limit),
  });
}

export function useProductsSorted(order: "desc" | "asc") {
  return useQuery<ProductResponseDTO[]>({
    queryKey: ["products", "sorted", order],
    queryFn: () => apiProduct.getSorted(order),
  });
}

export function useProductsByCategory(category: string) {
  return useQuery<ProductResponseDTO[]>({
    queryKey: ["products", "category", category],
    queryFn: () => apiProduct.getByCategory(category),
    enabled: !!category,
  });
}

export function useGetProductById(id: number) {
  console.log("useGetProductById called with id:", id);

  return useQuery<ProductResponseDTO>({
    queryKey: ["products", "product", id],
    queryFn: () => apiProduct.getById(id),
    enabled: !!id,
  });
}

// CRUD mutation
export function useCreateProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: apiProduct.create,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });
}

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: apiProduct.remove,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] }),
  });
}
